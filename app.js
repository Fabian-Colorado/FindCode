const translations = {
    es: {
        subtitle: "Un juego de lógica, deducción y estrategia para descifrar el código.",
        mode_solo: "🤖 Jugar en solitario",
        mode_same: "📱 Mismo Teléfono (2 Jugadores)",
        mode_two: "📱📱 Dos Teléfonos (Presencial)",
        mode_share: "🌐 Crear Reto por Enlace",
        menu_home: "🏠 Regresar al menú principal",
        ready_btn: "Listo, soy el jugador",
        exit: "Salir",
        rules_title: "Instrucciones de Juego",
        rules_close: "¡Entendido, a jugar!",
        challenged_desc: "¿Qué deseas hacer con este reto?",
        play_only: "Solo adivinar este reto",
        challenge_back_option: "Aceptar y Retar de vuelta"
    },
    en: {
        subtitle: "A logic, deduction, and strategy game to crack the code.",
        mode_solo: "🤖 Play Solo",
        mode_same: "📱 Same Phone (2 Players)",
        mode_two: "📱📱 Two Phones (Local)",
        mode_share: "🌐 Create Link Challenge",
        menu_home: "🏠 Main Menu",
        ready_btn: "Ready, let's play",
        exit: "Exit",
        rules_title: "Game Rules",
        rules_close: "Got it, let's play!",
        challenged_desc: "What would you like to do with this challenge?",
        play_only: "Just guess this challenge",
        challenge_back_option: "Accept & Challenge Back"
    }
};

let currentLang = 'es';
let gameMode = 'solo';
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
let samePhoneState = 'playing';

document.addEventListener('DOMContentLoaded', () => {
    buildDiscardBoard();
    switchRulesTab('easy');

    // Mantenimiento del botón flotante con el back físico
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

// TECLADO TÁCTIL PROPIO
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

function setGameMode(mode) {
    gameMode = mode;
    resetDiscardBoard();
    if (mode === 'solo') {
        secretCode = generateRandomCode();
        startGameSession();
    } else if (mode === 'same_phone') {
        p1Code = ''; p2Code = ''; p1Attempts = 0; p2Attempts = 0;
        p1HistoryHTML = ''; p2HistoryHTML = '';
        samePhoneState = 'playing';
        pendingActionAfterPass = 'p1_setup';
        showPassPhoneScreen("Jugador 1", "Configura tu código secreto en privado.");
    } else if (mode === 'two_phones') {
        alert("Modo Dos Teléfonos: Dile a tu rival que genere su propio reto y te comparta su enlace.");
        startHostLobby();
    }
}

function startHostLobby() {
    showScreen('linkDifficultyScreen');
}

function selectLinkDifficulty(diff) {
    currentDifficulty = diff;
    gameMode = 'link_host';
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

    if (gameMode === 'same_phone') {
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
    } else if (gameMode === 'link_host') {
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

    if (gameMode === 'same_phone') {
        document.getElementById('historyContainer').innerHTML = (currentTurnPlayer === 1) ? p1HistoryHTML : p2HistoryHTML;
        document.getElementById('turnIndicator').innerText = `Turno de: Jugador ${currentTurnPlayer}`;
    } else {
        document.getElementById('historyContainer').innerHTML = '';
        document.getElementById('turnIndicator').innerText = "Partida en curso";
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
    if (gameMode === 'same_phone') {
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
        if (gameMode === 'same_phone') {
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

    if (gameMode === 'same_phone') {
        let winner = currentTurnPlayer;
        let loser = (winner === 1) ? 2 : 1;
        let winCode = (winner === 1) ? p2Code : p1Code;
        let loseCode = (winner === 1) ? p1Code : p2Code;

        details.innerHTML = `
            <h3 style="color: #34d399; font-size: 1.5rem; margin-bottom: 0.5rem;">¡GANADOR JUGADOR ${winner}!</h3>
            <p>Descifró el código: <b>${winCode}</b></p>
            <div style="margin-top: 1rem; padding: 0.5rem; background: #450a0a; border-radius: 8px; color: #f87171;">
                Jugador ${loser} pierde (Su código era: ${loseCode})
            </div>
        `;
        actions.innerHTML = `
            <button class="btn primary full-width" onclick="goHome()">🏠 Regresar al menú</button>
        `;
    } else {
        details.innerHTML = `
            <p style="font-size: 1.2rem;">Intentos realizados: <b>${attemptCount}</b></p>
            <p style="color: var(--text-muted); margin-top: 0.5rem;">Código secreto: <b>${secretCode}</b></p>
        `;
        actions.innerHTML = `
            <button class="btn primary full-width" onclick="restartGame()">🔄 Volver a jugar</button>
            <button class="btn accent full-width" onclick="startHostLobby()" style="margin-top: 0.5rem;">🌐 Retar a un amigo</button>
            <button class="btn text full-width" onclick="goHome()">🏠 Menú principal</button>
        `;
    }

    document.getElementById('winModal').classList.add('active');
}

// PANEL DE DESCARTE CON TACO / PALOMITA
function buildDiscardBoard() {
    const r1 = document.getElementById('numberPillsRow1');
    const r2 = document.getElementById('numberPillsRow2');
    r1.innerHTML = ''; r2.innerHTML = '';

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

        if (i <= 4) r1.appendChild(pill);
        else r2.appendChild(pill);
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
        <span style="font-weight:700; font-size:1.1rem;">${guess}</span>
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
            <p><b>🟢 Modo Fácil:</b> Cada casilla te dirá exactamente qué pasó con ese dígito:</p>
            <ul style="margin: 0.5rem 0 0.5rem 1.2rem; color: var(--text-muted);">
                <li><b style="color:#10b981">Verde:</b> Dígito correcto en posición correcta.</li>
                <li><b style="color:#f59e0b">Naranja:</b> El dígito existe pero va en otra posición.</li>
            </ul>
        `;
    } else {
        body.innerHTML = `
            <p><b>🔴 Modo Difícil:</b> Recibirás un conteo general al final de la fila:</p>
            <ul style="margin: 0.5rem 0 0.5rem 1.2rem; color: var(--text-muted);">
                <li><b style="color:#10b981">Verdes:</b> Cuántos están en la posición exacta.</li>
                <li><b style="color:#f59e0b">Naranjas:</b> Cuántos existen pero están desubicados.</li>
            </ul>
        `;
    }
}

function openRulesModal() {
    document.getElementById('rulesModal').classList.add('active');
    document.getElementById('floatingHelpBtn').classList.remove('visible');
}

function closeRulesModal() {
    document.getElementById('rulesModal').classList.remove('active');
    document.getElementById('floatingHelpBtn').classList.add('visible');
}

function showScreen(id) {
    document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
    document.getElementById(id).classList.add('active');
    document.getElementById('floatingHelpBtn').classList.add('visible');
}

function goHome() {
    document.getElementById('winModal').classList.remove('active');
    showScreen('mainMenu');
}

function restartGame() {
    document.getElementById('winModal').classList.remove('active');
    setGameMode(gameMode);
}
