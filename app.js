let currentGameMode = 'solo';
let currentDifficulty = 'easy';

let secretCode = '';
let attemptCount = 0;
let p1Code = '', p2Code = '';
let p1Attempts = 0, p2Attempts = 0;
let p1HistoryHTML = '', p2HistoryHTML = '';
let currentTurnPlayer = 1;
let pendingActionAfterPass = '';

document.addEventListener('DOMContentLoaded', () => {
    buildDiscardBoard();
    switchRulesTab('easy');
    openRulesModal();

    window.history.pushState({ page: 'menu' }, '', '');
    window.addEventListener('popstate', () => {
        goHome();
        window.history.pushState({ page: 'menu' }, '', '');
    });
});

function showToast(msg) {
    const t = document.getElementById('toastNotification');
    t.innerText = msg;
    t.classList.add('show');
    setTimeout(() => t.classList.remove('show'), 3500);
}

function setDifficulty(diff) {
    currentDifficulty = diff;
    document.getElementById('topDifficultySelect').value = diff;
}

function focusNativeInput(inputId) {
    const inp = document.getElementById(inputId);
    inp.focus();
}

function formatNativeInput(input, context) {
    let val = input.value.replace(/\D/g, '');
    if (val.length > 4) val = val.slice(0, 4);

    // Evitar dígitos duplicados
    let uniqueVal = '';
    for (let char of val) {
        if (!uniqueVal.includes(char)) uniqueVal += char;
    }
    input.value = uniqueVal;
    playSound('click');

    for (let i = 0; i < 4; i++) {
        const slot = document.getElementById(`${context}-${i}`);
        slot.innerText = uniqueVal[i] || '';
        slot.classList.toggle('active', i === uniqueVal.length);
    }
}

function clearInput(context) {
    const inp = document.getElementById(context === 'setup' ? 'setupCodeInput' : 'gameCodeInput');
    inp.value = '';
    formatNativeInput(inp, context);
}

function setGameMode(mode) {
    currentGameMode = mode;
    resetDiscardBoard();
    if (mode === 'solo') {
        secretCode = generateRandomCode();
        startGameSession();
    } else if (mode === 'same_phone') {
        p1Code = ''; p2Code = ''; p1Attempts = 0; p2Attempts = 0;
        p1HistoryHTML = ''; p2HistoryHTML = '';
        pendingActionAfterPass = 'p1_setup';
        showPassPhoneScreen("Jugador 1", "Configura tu código secreto en privado.");
    } else if (mode === 'two_phones') {
        startHostLobby();
    }
}

function startHostLobby() {
    showScreen('linkDifficultyScreen');
}

function selectLinkDifficulty(diff) {
    setDifficulty(diff);
    currentGameMode = 'link_host';
    document.getElementById('setupTitle').innerText = "Configura el código para tu rival";
    showScreen('setupScreen');
    clearInput('setup');
}

function confirmSecretCode() {
    const inp = document.getElementById('setupCodeInput');
    let code = inp.value;
    if (code.length !== 4) {
        alert("Debes ingresar 4 dígitos únicos.");
        return;
    }
    clearInput('setup');

    if (currentGameMode === 'same_phone') {
        if (pendingActionAfterPass === 'p1_setup') {
            p1Code = code;
            pendingActionAfterPass = 'p2_setup';
            showPassPhoneScreen("Jugador 2", "Turno del Jugador 2 de configurar su código.");
        } else if (pendingActionAfterPass === 'p2_setup') {
            p2Code = code;
            pendingActionAfterPass = 'p1_guess';
            currentTurnPlayer = 1;
            showPassPhoneScreen("Jugador 1", "Comienza la partida. Intenta adivinar el código del Jugador 2.");
        }
    } else if (currentGameMode === 'link_host') {
        let payload = btoa(JSON.stringify({ c: code, d: currentDifficulty }));
        let shareUrl = `${window.location.origin}${window.location.pathname}#room=${payload}`;
        
        navigator.clipboard.writeText(shareUrl).then(() => {
            showToast("📋 ¡Enlace copiado! Pásaselo a tu rival y dile que te mande su propio reto.");
            goHome();
        }).catch(() => {
            prompt("Copia tu enlace de reto:", shareUrl);
            goHome();
        });
    } else {
        secretCode = code;
        startGameSession();
    }
}

function showPassPhoneScreen(playerLabel, desc) {
    document.getElementById('passPhoneTitle').innerText = `Pasa el teléfono a: ${playerLabel}`;
    document.getElementById('passPhoneDesc').innerText = desc;
    showScreen('passPhoneScreen');
}

function confirmPassPhone() {
    if (pendingActionAfterPass === 'p1_setup' || pendingActionAfterPass === 'p2_setup') {
        showScreen('setupScreen');
        clearInput('setup');
    } else {
        startGameSession();
    }
}

function startGameSession() {
    attemptCount = 0;
    clearInput('game');
    resetDiscardBoard();

    if (currentGameMode === 'same_phone') {
        document.getElementById('historyContainer').innerHTML = (currentTurnPlayer === 1) ? p1HistoryHTML : p2HistoryHTML;
        document.getElementById('turnIndicator').innerText = `Turno de: Jugador ${currentTurnPlayer}`;
    } else {
        document.getElementById('historyContainer').innerHTML = '';
        document.getElementById('turnIndicator').innerText = currentDifficulty === 'easy' ? "🟢 Modo Fácil" : "🔴 Modo Difícil";
    }
    showScreen('gameScreen');
}

function submitGuess() {
    const inp = document.getElementById('gameCodeInput');
    let guess = inp.value;
    if (guess.length !== 4) {
        alert("Introduce 4 dígitos.");
        return;
    }
    clearInput('game');

    let activeTarget = secretCode;
    if (currentGameMode === 'same_phone') {
        activeTarget = (currentTurnPlayer === 1) ? p2Code : p1Code;
        if (currentTurnPlayer === 1) p1Attempts++; else p2Attempts++;
    } else {
        attemptCount++;
    }

    if (currentDifficulty === 'easy') {
        appendHistoryEasy(guess, activeTarget);
    } else {
        appendHistoryHard(guess, activeTarget);
    }

    if (guess === activeTarget) {
        playSound('success');
        handleVictory();
    } else {
        if (currentGameMode === 'same_phone') {
            if (currentTurnPlayer === 1) p1HistoryHTML = document.getElementById('historyContainer').innerHTML;
            else p2HistoryHTML = document.getElementById('historyContainer').innerHTML;

            triggerTurnWait();
        }
    }
}

function triggerTurnWait() {
    showScreen('turnWaitScreen');
    let nextPlayer = (currentTurnPlayer === 1) ? 2 : 1;
    document.getElementById('turnWaitTitle').innerText = `Turno finalizado`;
    document.getElementById('turnWaitDesc').innerText = `Pasando el teléfono al Jugador ${nextPlayer}...`;

    setTimeout(() => {
        currentTurnPlayer = nextPlayer;
        pendingActionAfterPass = (currentTurnPlayer === 1) ? 'p1_guess' : 'p2_guess';
        showPassPhoneScreen(`Jugador ${currentTurnPlayer}`, `Te toca adivinar.`);
    }, 3000);
}

function handleVictory() {
    const details = document.getElementById('victoryDetailsContent');
    const actions = document.getElementById('winModalActions');

    if (currentGameMode === 'same_phone') {
        let winner = currentTurnPlayer;
        let loser = (winner === 1) ? 2 : 1;
        let winCode = (winner === 1) ? p2Code : p1Code;
        let loseCode = (winner === 1) ? p1Code : p2Code;

        details.innerHTML = `
            <h3 style="color: var(--accent-green); font-size: 1.4rem; margin-bottom: 0.4rem;">¡GANA JUGADOR ${winner}!</h3>
            <p>Código descubierto: <b>${winCode}</b></p>
            <div style="margin-top: 0.75rem; padding: 0.4rem; background: #450a0a; border-radius: 6px; color: #f87171; font-size: 0.9rem;">
                Jugador ${loser} pierde (Su código era: ${loseCode})
            </div>
        `;
        actions.innerHTML = `<button class="btn primary full-width" onclick="goHome()">🏠 Regresar al menú</button>`;
    } else {
        details.innerHTML = `
            <p style="font-size: 1.1rem;">Intentos realizados: <b>${attemptCount}</b></p>
            <p style="color: var(--text-muted); margin-top: 0.4rem;">Código secreto: <b>${secretCode}</b></p>
        `;
        actions.innerHTML = `
            <button class="btn primary full-width" onclick="restartGame()">🔄 Volver a jugar</button>
            <button class="btn accent full-width" onclick="startHostLobby()" style="margin-top: 0.4rem;">🌐 Retar a un amigo</button>
            <button class="btn text full-width" onclick="goHome()">🏠 Menú principal</button>
        `;
    }

    document.getElementById('winModal').classList.add('active');
}

function buildDiscardBoard() {
    const row = document.getElementById('numberPillsRow');
    row.innerHTML = '';

    for (let i = 0; i <= 9; i++) {
        const pill = document.createElement('div');
        pill.className = 'pill';
        pill.innerText = i;
        pill.dataset.state = 'normal';

        pill.onclick = () => {
            playSound('click');
            if (pill.dataset.state === 'normal') {
                pill.dataset.state = 'discarded';
                pill.className = 'pill discarded';
            } else if (pill.dataset.state === 'discarded') {
                pill.dataset.state = 'confirmed';
                pill.className = 'pill confirmed';
            } else {
                pill.dataset.state = 'normal';
                pill.className = 'pill';
            }
        };
        row.appendChild(pill);
    }
}

function resetDiscardBoard() {
    document.querySelectorAll('.pill').forEach(p => {
        p.className = 'pill';
        p.dataset.state = 'normal';
    });
}

function appendHistoryEasy(guess, target) {
    const container = document.getElementById('historyContainer');
    const row = document.createElement('div');
    row.className = 'history-row';
    
    const group = document.createElement('div');
    group.className = 'history-guess-group';

    for (let i = 0; i < 4; i++) {
        const t = document.createElement('div');
        t.className = 'history-tile';
        t.innerText = guess[i];
        if (guess[i] === target[i]) t.classList.add('green');
        else if (target.includes(guess[i])) t.classList.add('orange');
        group.appendChild(t);
    }
    row.appendChild(group);
    container.prepend(row);
}

function appendHistoryHard(guess, target) {
    let green = 0, orange = 0;
    for (let i = 0; i < 4; i++) {
        if (guess[i] === target[i]) green++;
        else if (target.includes(guess[i])) orange++;
    }
    const container = document.getElementById('historyContainer');
    const row = document.createElement('div');
    row.className = 'history-row';

    const group = document.createElement('div');
    group.className = 'history-guess-group';
    for (let i = 0; i < 4; i++) {
        const t = document.createElement('div');
        t.className = 'history-tile';
        t.innerText = guess[i];
        group.appendChild(t);
    }

    const stats = document.createElement('div');
    stats.className = 'hard-stats-group';
    stats.innerHTML = `
        <span class="badge-only-number green">${green}</span>
        <span class="badge-only-number orange">${orange}</span>
    `;

    row.appendChild(group);
    row.appendChild(stats);
    container.prepend(row);
}

function generateRandomCode() {
    let digits = ['0','1','2','3','4','5','6','7','8','9'];
    digits.sort(() => Math.random() - 0.5);
    return digits.slice(0, 4).join('');
}

function switchRulesTab(tab) {
    document.getElementById('tabEasy').classList.toggle('active', tab === 'easy');
    document.getElementById('tabHard').classList.toggle('active', tab === 'hard');

    const body = document.getElementById('rulesBody');
    if (tab === 'easy') {
        body.innerHTML = `
            <p><b>🟢 Modo Fácil:</b> Cada casilla te dirá el estado exacto del dígito:</p>
            <ul style="margin: 0.4rem 0 0.4rem 1.1rem; color: var(--text-muted); font-size: 0.85rem;">
                <li><b style="color:var(--accent-green)">Verde:</b> Dígito correcto en posición correcta.</li>
                <li><b style="color:var(--accent-orange)">Naranja:</b> El dígito existe pero va en otra posición.</li>
            </ul>
        `;
    } else {
        body.innerHTML = `
            <p><b>🔴 Modo Difícil:</b> Recibirás un conteo general por intento:</p>
            <ul style="margin: 0.4rem 0 0.4rem 1.1rem; color: var(--text-muted); font-size: 0.85rem;">
                <li><b style="color:var(--accent-green)">Verdes:</b> Cuántos números están en la posición exacta.</li>
                <li><b style="color:var(--accent-orange)">Naranjas:</b> Cuántos números existen pero están desubicados.</li>
            </ul>
        `;
    }
}

function openRulesModal() {
    document.getElementById('rulesModal').classList.add('active');
}

function closeRulesModal() {
    document.getElementById('rulesModal').classList.remove('active');
}

function showScreen(id) {
    document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
    document.getElementById(id).classList.add('active');
}

function goHome() {
    document.getElementById('winModal').classList.remove('active');
    showScreen('mainMenu');
}

function restartGame() {
    document.getElementById('winModal').classList.remove('active');
    setGameMode(currentGameMode);
}
