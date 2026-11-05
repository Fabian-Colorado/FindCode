const translations = {
    es: {
        appName: "Find Code",
        subtitle: "Un juego de lógica, deducción y estrategia para descifrar el código.",
        mode_solo: "🤖 Jugar en solitario",
        mode_same: "📱 Mismo Teléfono (2 Jugadores)",
        mode_two: "📱📱 Dos Teléfonos (Presencial)",
        mode_share: "🌐 Crear Reto por Enlace",
        confirm: "Confirmar y Jugar",
        back: "Volver al menú",
        menu_home: "🏠 Regresar al menú principal",
        exit: "Salir",
        guess_btn: "Probar Código",
        discard_title: "Descarte:",
        play_again: "🔄 Volver a jugar",
        back_menu: "Menú Principal",
        share_result: "📤 Compartir resultado",
        challenge_back: "⚔️ ¡Retar de vuelta!",
        rules_title: "Instrucciones del Modo",
        rules_close: "¡Entendido, a jugar!",
        win_title: "¡CÓDIGO DESCIFRADO!",
        difficulty_label: "Dificultad:",
        challenged_desc: "¿Qué deseas hacer con este reto?",
        play_only: "Solo adivinar este reto",
        challenge_back_option: "Aceptar y Retar de vuelta",
        ready_btn: "Listo, soy el jugador",
        rules_general: `
            <p>🎯 <b>Objetivo:</b> Adivina el código secreto de 4 dígitos únicos (0 al 9).</p>
            <p>📝 <b>Panel de descarte:</b> Toca los números arriba del teclado para cruzarlos en diagonal y ayudarte a deducir.</p>
            <p>🟢 <b>Fácil (con pistas):</b> Muestra fichas de colores indicando si el dígito y su posición son exactos.</p>
            <p>🟠 <b>Difícil (sin pistas):</b> Muestra únicamente la cantidad total de aciertos mediante números con fondo de color.</p>
        `,
        rules_solo: `
            <p>🤖 <b>Modo Solitario:</b></p>
            <p>• La computadora genera un número secreto aleatorio de 4 dígitos únicos.</p>
            <p>• Intenta adivinarlo utilizando las pistas de las casillas y tu panel de descarte superior.</p>
        `,
        rules_same: `
            <p>📱 <b>Mismo Teléfono (2 Jugadores):</b></p>
            <p>• <b>Paso 1:</b> El Jugador 1 configura su código secreto en secreto.</p>
            <p>• <b>Paso 2:</b> El teléfono se pasa al Jugador 2 para que configure el suyo.</p>
            <p>• <b>Paso 3:</b> Comienzan los turnos cruzados. Cada jugador hace un intento y pasa el dispositivo al rival hasta que alguien descifre el código contrario.</p>
        `,
        rules_two: `
            <p>📱📱 <b>Dos Teléfonos / Enlaces:</b></p>
            <p>• Crea un reto con tu código y compártelo mediante el enlace generado.</p>
            <p>• Tu rival abrirá el enlace en su propio dispositivo para intentar adivinar tu código, o podrá retarte de vuelta.</p>
        `
    },
    en: {
        appName: "Find Code",
        subtitle: "A logic, deduction, and strategy game to crack the code.",
        mode_solo: "🤖 Play Solo",
        mode_same: "📱 Same Phone (2 Players)",
        mode_two: "📱📱 Two Phones (Local)",
        mode_share: "🌐 Create Link Challenge",
        confirm: "Confirm & Play",
        back: "Back to Menu",
        menu_home: "🏠 Main Menu",
        exit: "Exit",
        guess_btn: "Test Code",
        discard_title: "Discard:",
        play_again: "🔄 Play Again",
        back_menu: "Main Menu",
        share_result: "📤 Share result",
        challenge_back: "⚔️ Challenge back!",
        rules_title: "Mode Instructions",
        rules_close: "Got it, let's play!",
        win_title: "CODE CRACKED!",
        difficulty_label: "Difficulty:",
        challenged_desc: "What would you like to do with this challenge?",
        play_only: "Just guess this challenge",
        challenge_back_option: "Accept & Challenge Back",
        ready_btn: "Ready, I'm the player",
        rules_general: `<p>🎯 <b>Goal:</b> Guess the secret 4-unique-digit code.</p>`,
        rules_solo: `<p>🤖 <b>Solo Mode:</b> Practice against a randomly generated code.</p>`,
        rules_same: `<p>📱 <b>Same Phone:</b> Take turns passing the phone between 2 players.</p>`,
        rules_two: `<p>📱📱 <b>Two Phones:</b> Share challenge links to duel asynchronously.</p>`
    },
    ja: {
        appName: "Find Code",
        subtitle: "暗号を解読する論理と推論のパズルゲーム。",
        mode_solo: "🤖 ソロプレイ",
        mode_same: "📱 同じスマホ (2人プレイ)",
        mode_two: "📱📱 2台のスマホ",
        mode_share: "🌐 挑戦状を作成",
        confirm: "確認してスタート",
        back: "メニューに戻る",
        menu_home: "🏠 メインメニュー",
        exit: "終了",
        guess_btn: "コードを試す",
        discard_title: "除外:",
        play_again: "🔄 もう一度プレイ",
        back_menu: "メインメニュー",
        share_result: "📤 結果をシェア",
        challenge_back: "⚔️ 逆挑戦する！",
        rules_title: "ゲーム説明",
        rules_close: "了解！",
        win_title: "暗号解読成功！",
        difficulty_label: "難易度:",
        challenged_desc: "どう挑戦しますか？",
        play_only: "推測のみ行う",
        challenge_back_option: "挑戦を受けて逆挑戦",
        ready_btn: "準備完了",
        rules_general: `<p>🎯 <b>目的:</b> 4桁の重複しない暗号コードを解読せよ。</p>`,
        rules_solo: `<p>🤖 <b>ソロ:</b> ランダムコードを推測します。</p>`,
        rules_same: `<p>📱 <b>同じスマホ:</b> スマホをパスしながら2人で対戦します。</p>`,
        rules_two: `<p>📱📱 <b>2台のスマホ:</b> リンク共有で対戦。</p>`
    },
    zh: {
        appName: "Find Code",
        subtitle: "充满逻辑、推理与策略的密码破译游戏。",
        mode_solo: "🤖 单人模式",
        mode_same: "📱 同机双人轮流",
        mode_two: "📱📱 双机面对面",
        mode_share: "🌐 创建挑战链接",
        confirm: "确认并开始",
        back: "返回菜单",
        menu_home: "🏠 主菜单",
        exit: "退出",
        guess_btn: "提交猜测",
        discard_title: "排除:",
        play_again: "🔄 再玩一次",
        back_menu: "主菜单",
        share_result: "📤 分享结果",
        challenge_back: "⚔️ 反向挑战！",
        rules_title: "游戏规则",
        rules_close: "明白！",
        win_title: "密码破译成功！",
        difficulty_label: "难度:",
        challenged_desc: "你想怎么处理这个挑战？",
        play_only: "仅猜测此挑战",
        challenge_back_option: "接受并反向挑战",
        ready_btn: "准备好了",
        rules_general: `<p>🎯 <b>目标:</b> 猜出由4个不重复数字组成的秘密密码。</p>`,
        rules_solo: `<p>🤖 <b>单人:</b> 练习猜数字。</p>`,
        rules_same: `<p>📱 <b>同机双人:</b> 轮流传递手机进行双人对战。</p>`,
        rules_two: `<p>📱📱 <b>双机:</b> 链接挑战。</p>`
    }
};

let currentLang = 'es';
let currentDifficulty = 'easy';
let gameMode = 'solo';

let secretCode = '';
let attemptCount = 0;
let challengerName = '';

// Variables para "Mismo Teléfono"
let p1Code = '';
let p2Code = '';
let p1Attempts = 0;
let p2Attempts = 0;
let currentTurnPlayer = 1; 
let pendingActionAfterPass = ''; 

document.addEventListener('DOMContentLoaded', () => {
    setupNumericInputs();
    buildDiscardBoard();
    changeLanguage('es');
    checkUrlForSharedGame();
    loadStats();
});

function showToast(message) {
    const toast = document.getElementById('toastNotification');
    toast.innerText = message;
    toast.classList.add('show');
    setTimeout(() => { toast.classList.remove('show'); }, 3500);
}

function setupNumericInputs() {
    document.querySelectorAll('.numeric-only').forEach(input => {
        input.addEventListener('beforeinput', (e) => {
            if (e.data && !/^[0-9]$/.test(e.data)) e.preventDefault();
        });
        input.addEventListener('input', (e) => {
            e.target.value = e.target.value.replace(/[^0-9]/g, '');
            if (e.target.value) playSound('click');
        });
    });

    initInputNavigation('#setupInputs');
    initInputNavigation('#currentAttemptInputs');
}

function initInputNavigation(selector) {
    const inputs = document.querySelectorAll(`${selector} input`);
    inputs.forEach((input, idx) => {
        input.addEventListener('input', () => {
            if (input.value && idx < inputs.length - 1) inputs[idx + 1].focus();
        });
        input.addEventListener('keydown', (e) => {
            if (e.key === 'Backspace' && !input.value && idx > 0) inputs[idx - 1].focus();
        });
    });
}

function changeLanguage(lang) {
    currentLang = lang;
    document.getElementById('brandTitle').innerText = translations[lang].appName;
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[lang][key]) el.innerText = translations[lang][key];
    });
    updateRulesContent();
}

function updateRulesContent(mode = 'general') {
    let t = translations[currentLang];
    let modeText = t.rules_general;
    if (mode === 'solo') modeText += t.rules_solo;
    if (mode === 'same_phone') modeText += t.rules_same;
    if (mode === 'two_phones' || mode === 'link') modeText += t.rules_two;
    document.getElementById('rulesBody').innerHTML = modeText;
}

function setDifficulty(diff) {
    currentDifficulty = diff;
    document.getElementById('diffEasy').classList.toggle('active', diff === 'easy');
    document.getElementById('diffHard').classList.toggle('active', diff === 'hard');
}

function setGameMode(mode) {
    gameMode = mode;
    if (mode === 'solo') {
        updateRulesContent('solo');
        openRulesModal();
        secretCode = generateRandomCode();
        startGameSession();
    } else if (mode === 'same_phone') {
        updateRulesContent('same_phone');
        openRulesModal();
        p1Code = ''; p2Code = ''; p1Attempts = 0; p2Attempts = 0;
        pendingActionAfterPass = 'p1_setup';
    } else {
        updateRulesContent('two_phones');
        openRulesModal();
        document.getElementById('setupTitle').innerText = "Configura tu código secreto";
    }
}

// Control seguro del cierre de reglas según el modo activo
function closeRulesModal() {
    document.getElementById('rulesModal').classList.remove('active');
    document.getElementById('floatingHelpBtn').classList.add('visible');

    // Si viene de un enlace compartido, al cerrar el modal mostramos la pantalla de bienvenida del invitado
    if (window.location.hash.includes('#room=')) {
        showScreen('guestWelcomeScreen');
        return;
    }

    if (gameMode === 'same_phone' && pendingActionAfterPass === 'p1_setup') {
        showPassPhoneScreen("Jugador 1", "Configura tu código secreto ocultando el teléfono del Jugador 2.");
    } else if (gameMode === 'two_phones' || gameMode === 'link_host' || gameMode === 'link_revenge') {
        showScreen('setupScreen');
    }
}

function generateRandomCode() {
    let digits = ['0','1','2','3','4','5','6','7','8','9'];
    digits.sort(() => Math.random() - 0.5);
    return digits.slice(0, 4).join('');
}

function startHostLobby() {
    gameMode = 'link_host';
    updateRulesContent('link');
    openRulesModal();
}

function confirmSecretCode() {
    const inputs = document.querySelectorAll('#setupInputs input');
    let code = Array.from(inputs).map(i => i.value).join('');
    if (code.length !== 4 || new Set(code).size !== 4) {
        alert("Introduce 4 dígitos únicos.");
        return;
    }

    let nickname = document.getElementById('playerNickname').value.trim() || "Alguien";

    if (gameMode === 'same_phone') {
        inputs.forEach(i => i.value = '');
        if (pendingActionAfterPass === 'p1_setup') {
            p1Code = code;
            pendingActionAfterPass = 'p2_setup';
            showPassPhoneScreen("Jugador 2", "Es el turno del Jugador 2 de configurar su código secreto.");
        } else if (pendingActionAfterPass === 'p2_setup') {
            p2Code = code;
            pendingActionAfterPass = 'p1_guess';
            currentTurnPlayer = 1;
            showPassPhoneScreen("Jugador 1", "Comienza el duelo. Jugador 1 intenta adivinar el código del Jugador 2.");
        }
    } else if (gameMode === 'link_host' || gameMode === 'link_revenge' || gameMode === 'link_guest_reply') {
        let payload = btoa(JSON.stringify({ c: code, d: currentDifficulty, n: nickname }));
        let shareUrl = `${window.location.origin}${window.location.pathname}#room=${payload}`;

        navigator.clipboard.writeText(shareUrl).then(() => {
            showToast("📋 ¡Enlace copiado! Envíaselo a tu rival para jugar.");
            inputs.forEach(i => i.value = '');
            if (gameMode === 'link_guest_reply') {
                startGameSession();
            } else {
                goHome();
            }
        }).catch(() => {
            prompt("Copia tu enlace de reto:", shareUrl);
            inputs.forEach(i => i.value = '');
            if (gameMode === 'link_guest_reply') {
                startGameSession();
            } else {
                goHome();
            }
        });
    } else {
        secretCode = code;
        inputs.forEach(i => i.value = '');
        startGameSession();
    }
}

function showPassPhoneScreen(playerLabel, descriptionText) {
    document.getElementById('passPhoneTitle').innerText = `Pasa el teléfono a: ${playerLabel}`;
    document.getElementById('passPhoneDesc').innerText = descriptionText;
    showScreen('passPhoneScreen');
}

function confirmPassPhone() {
    if (pendingActionAfterPass === 'p1_setup' || pendingActionAfterPass === 'p2_setup') {
        document.getElementById('setupTitle').innerText = `${pendingActionAfterPass === 'p1_setup' ? 'Jugador 1' : 'Jugador 2'}: Configura tu código`;
        showScreen('setupScreen');
    } else if (pendingActionAfterPass === 'p1_guess' || pendingActionAfterPass === 'p2_guess') {
        startGameSession();
    }
}

function checkUrlForSharedGame() {
    const hash = window.location.hash;
    if (hash.includes('#room=')) {
        try {
            let encoded = hash.split('#room=')[1];
            let roomData = JSON.parse(atob(encoded));
            secretCode = roomData.c; 
            currentDifficulty = roomData.d || 'easy'; 
            challengerName = roomData.n || "Alguien";
            
            setDifficulty(currentDifficulty);
            document.getElementById('challengerTitle').innerText = `¡${challengerName} te ha retado!`;
            
            // Muestra primero las instrucciones del modo, y al cerrarlas pasa al guestWelcomeScreen
            updateRulesContent('two_phones');
            openRulesModal();
        } catch (e) {
            console.error("Reto inválido");
        }
    }
}

function startGuestPlayOnly() {
    gameMode = 'link_guest';
    startGameSession();
}

function acceptAndChallengeBack() {
    gameMode = 'link_guest_reply';
    document.getElementById('setupTitle').innerText = `Configura tu código para retar a ${challengerName}`;
    showScreen('setupScreen');
}

function startGameSession() {
    attemptCount = 0;
    document.getElementById('historyContainer').innerHTML = '';
    
    if (gameMode === 'same_phone') {
        document.getElementById('turnIndicator').innerText = `Turno de: Jugador ${currentTurnPlayer}`;
    } else {
        document.getElementById('turnIndicator').innerText = challengerName ? `Reto de ${challengerName}` : "Partida en curso";
    }

    showScreen('gameScreen');
}

function submitGuess() {
    const inputs = document.querySelectorAll('#currentAttemptInputs input');
    let guess = Array.from(inputs).map(i => i.value).join('');

    if (guess.length !== 4 || new Set(guess).size !== 4) {
        alert("Introduce 4 dígitos únicos.");
        return;
    }

    let activeTargetCode = secretCode;
    if (gameMode === 'same_phone') {
        activeTargetCode = (currentTurnPlayer === 1) ? p2Code : p1Code;
        if (currentTurnPlayer === 1) p1Attempts++;
        else p2Attempts++;
    } else {
        attemptCount++;
    }

    if (currentDifficulty === 'easy') {
        appendHistoryEasyRow(guess, activeTargetCode);
    } else {
        appendHistoryHardRow(guess, activeTargetCode);
    }

    inputs.forEach(i => i.value = '');
    inputs[0].focus();

    if (guess === activeTargetCode) {
        playSound('success');
        let winningAttempts = (gameMode === 'same_phone') ? (currentTurnPlayer === 1 ? p1Attempts : p2Attempts) : attemptCount;
        
        document.getElementById('victoryCodeDisplay').innerText = activeTargetCode.split('').join(' ');
        document.getElementById('victoryAttempts').innerText = `${winningAttempts} intentos`;
        document.getElementById('winModal').classList.add('active');
        saveStat(winningAttempts);
    } else {
        if (gameMode === 'same_phone') {
            currentTurnPlayer = (currentTurnPlayer === 1) ? 2 : 1;
            pendingActionAfterPass = (currentTurnPlayer === 1) ? 'p1_guess' : 'p2_guess';
            showPassPhoneScreen(`Jugador ${currentTurnPlayer}`, `Intento fallido. Pasa el teléfono al Jugador ${currentTurnPlayer} para su turno.`);
        }
    }
}

function appendHistoryEasyRow(guess, targetCode) {
    const container = document.getElementById('historyContainer');
    const row = document.createElement('div');
    row.className = 'history-row wordle-row';

    for (let i = 0; i < 4; i++) {
        const tile = document.createElement('div');
        tile.className = 'history-tile';
        tile.innerText = guess[i];

        if (guess[i] === targetCode[i]) {
            tile.classList.add('green');
        } else if (targetCode.includes(guess[i])) {
            tile.classList.add('orange');
        }
        row.appendChild(tile);
    }
    container.prepend(row);
}

function appendHistoryHardRow(guess, targetCode) {
    let green = 0;
    let orange = 0;

    for (let i = 0; i < 4; i++) {
        if (guess[i] === targetCode[i]) {
            green++;
        } else if (targetCode.includes(guess[i])) {
            orange++;
        }
    }

    const container = document.getElementById('historyContainer');
    const row = document.createElement('div');
    row.className = 'history-row';
    row.innerHTML = `
        <span class="history-code">${guess}</span>
        <div class="feedback-badges">
            <span class="badge-only-number green">${green}</span>
            <span class="badge-only-number orange">${orange}</span>
        </div>
    `;
    container.prepend(row);
}

function buildDiscardBoard() {
    const board = document.getElementById('numberPills');
    board.innerHTML = '';
    for (let i = 0; i <= 9; i++) {
        const pill = document.createElement('div');
        pill.className = 'pill';
        pill.innerText = i;
        pill.onclick = () => {
            playSound('click');
            pill.classList.toggle('discarded');
        };
        board.appendChild(pill);
    }
}

function restartGame() {
    document.getElementById('winModal').classList.remove('active');
    if (gameMode === 'solo') {
        secretCode = generateRandomCode();
        startGameSession();
    } else if (gameMode === 'same_phone') {
        setGameMode('same_phone');
    } else {
        startGameSession();
    }
}

function shareResult() {
    let text = `🧠 ¡Descifré el código en Find Code! ¿Puedes superarme?`;
    if (navigator.share) {
        navigator.share({ title: 'Find Code', text: text, url: window.location.href }).catch(() => {});
    } else {
        navigator.clipboard.writeText(text).then(() => showToast("📋 ¡Resultado copiado al portapapeles!"));
    }
}

function openRevengeSetup() {
    document.getElementById('winModal').classList.remove('active');
    gameMode = 'link_revenge';
    document.getElementById('setupTitle').innerText = "¡Revancha! Configura tu nuevo código";
    showScreen('setupScreen');
}

function saveStat(attempts) {
    try {
        let stats = JSON.parse(localStorage.getItem('findcode_stats') || '[]');
        stats.push({ date: new Date().toISOString(), attempts: attempts });
        localStorage.setItem('findcode_stats', JSON.stringify(stats));
    } catch(e) {}
}

function loadStats() {
    try {
        let stats = JSON.parse(localStorage.getItem('findcode_stats') || '[]');
        console.log("Partidas guardadas:", stats.length);
    } catch(e) {}
}

function openRulesModal() {
    document.getElementById('rulesModal').classList.add('active');
    document.getElementById('floatingHelpBtn').classList.remove('visible');
}

function showScreen(id) {
    document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
    document.getElementBy