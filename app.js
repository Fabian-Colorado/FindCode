let currentGameMode = 'solo';
let currentDifficulty = 'easy';

let secretCode = '';
let attemptCount = 0;
let setupBuffer = [];
let gameBuffer = [];

let p1Code = '', p2Code = '';
let p1Attempts = 0, p2Attempts = 0;
let p1HistoryHTML = '', p2HistoryHTML = '';
let currentTurnPlayer = 1;
let pendingActionAfterPass = '';

document.addEventListener('DOMContentLoaded', () => {
    buildDiscardBoard();
    switchRulesTab('easy');
    
    // Mostrar instrucciones automáticamente al entrar a la web por primera vez
    openRulesModal();

    // Soporte para teclado físico de PC o dispositivos conectados
    window.addEventListener('keydown', (e) => {
        const activeScreen = document.querySelector('.screen.active');
        if (!activeScreen) return;

        let context = null;
        if (activeScreen.id === 'setupScreen') context = 'setup';
        else if (activeScreen.id === 'gameScreen') context = 'game';

        if (!context) return;

        if (e.key >= '0' && e.key <= '9') {
            typeDigit(e.key, context);
        } else if (e.key === 'Backspace') {
            deleteDigit(context);
        } else if (e.key === 'Enter') {
            if (context === 'setup') confirmSecretCode();
            else if (context === 'game') submitGuess();
        }
    });

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

function typeDigit(digit, context) {
    let buffer = (context === 'setup') ? setupBuffer : gameBuffer;
    if (buffer.length < 4 && !buffer.includes(digit)) {
        buffer.push(digit);
        playSound('click');
        updateCodeDisplay(context);
    }
}

function deleteDigit(context) {
    let buffer = (context === 'setup') ? setupBuffer : gameBuffer;
    if (buffer.length > 0) {
        buffer.pop();
        playSound('click');
        updateCodeDisplay(context);
    }
}

function updateCodeDisplay(context) {
    const container = document.getElementById(context === 'setup' ? 'setupCodeDisplay' : 'gameCodeDisplay');
    const slots = container.querySelectorAll('.digit-slot');
    let buffer = (context === 'setup') ? setupBuffer : gameBuffer;

    slots.forEach((slot, idx) => {
        slot.innerText = buffer[idx] || '';
        slot.classList.toggle('active', idx === buffer.length);
    });
}

function setDifficulty(diff) {
    currentDifficulty = diff;
    document.getElementById('topDifficultySelect').value = diff;
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
}

function confirmSecretCode() {
    if (setupBuffer.length !== 4) {
        alert("Debes ingresar 4 dígitos únicos.");
        return;
    }
    let code = setupBuffer.join('');
    setupBuffer = [];
    updateCodeDisplay('setup');

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
    } else {
        startGameSession();
    }
}

function startGameSession() {
    attemptCount = 0;
    gameBuffer = [];
    updateCodeDisplay('game');
    resetDiscardBoard();

    if (currentGameMode === 'same_phone') {
        document.getElementById('historyContainer').innerHTML = (currentTurnPlayer === 1) ? p1HistoryHTML : p2HistoryHTML;
        document.getElementById('turnIndicator').innerText = `Turno de: Jugador ${currentTurnPlayer}`;
    } else {
        document.getElementById('historyContainer').innerHTML = '';
        document.getElementById('turnIndicator').innerText = currentDifficulty === 'easy' ? "Modo Fácil" : "Modo Difícil";
    }
    showScreen('gameScreen');
}

function submitGuess() {
    if (gameBuffer.length !== 4) {
        alert("Introduce 4 dígitos.");
        return;
    }
    let guess = gameBuffer.join('');
    gameBuffer = [];
    updateCodeDisplay('game');

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
            <h3 style="color: #34d399; font-size: 1.4rem; margin-bottom: 0.4rem;">¡GANA JUGADOR ${winner}!</h3>
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

// PANEL DE DESCARTE COMPACTO (Fila única 0-9)
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
    for (let i = 0; i < 4; i++) {
        const t = document.createElement('div');
        t.className = 'history-tile';
        t.innerText = guess[i];
        if (guess[i] === target[i]) t.classList.add('green');
        else if (target.includes(guess[i])) t.classList.add('orange');
        row.appendChild(t);
    }
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
    row.innerHTML = `
        <span style="font-weight:700; font-size:1rem;">${guess}</span>
        <div>
            <span class="badge-only-number green">${green}</span>
            <span class="badge-only-number orange">${orange}</span>
        </div>
    `;
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
                <li><b style="color:#059669">Verde:</b> Dígito correcto en posición correcta.</li>
                <li><b style="color:#d97706">Naranja:</b> El dígito existe pero va en otra posición.</li>
            </ul>
        `;
    } else {
        body.innerHTML = `
            <p><b>🔴 Modo Difícil:</b> Recibirás un conteo general por intento:</p>
            <ul style="margin: 0.4rem 0 0.4rem 1.1rem; color: var(--text-muted); font-size: 0.85rem;">
                <li><b style="color:#059669">Verdes:</b> Cuántos números están en la posición exacta.</li>
                <li><b style="color:#d97706">Naranjas:</b> Cuántos números existen pero están desubicados.</li>
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
