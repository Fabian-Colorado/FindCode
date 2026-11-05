const translations = {
    es: {
        appName: "Find Code",
        subtitle: "Un juego de lógica, deducción y estrategia para descifrar el código.",
        mode_solo: "🤖 Jugar contra la IA",
        mode_same: "📱 Mismo Teléfono (Turnos)",
        mode_two: "📱📱 Dos Teléfonos (Presencial)",
        mode_share: "🌐 Crear Reto por Enlace",
        confirm: "Confirmar y Jugar",
        back: "Volver al menú",
        exit: "Salir",
        guess_btn: "Probar Código",
        discard_title: "Panel de descarte (toca para descartar números):",
        play_again: "🔄 Volver a jugar",
        back_menu: "Menú Principal",
        share_result: "📤 Compartir resultado",
        challenge_back: "⚔️ ¡Retar de vuelta!",
        rules_title: "¿Cómo jugar?",
        rules_close: "¡Entendido, a jugar!",
        win_title: "¡CÓDIGO DESCIFRADO!",
        difficulty_label: "Dificultad:",
        challenged_desc: "¿Qué deseas hacer con este reto?",
        play_only: "Solo adivinar este reto",
        challenge_back_option: "Aceptar y Retar de vuelta",
        rules_text: `
            <p>🎯 <b>Objetivo:</b> Adivina el código secreto de 4 dígitos únicos.</p>
            <p>📝 <b>Panel de descarte:</b> Toca los números abajo para tachar y ayudarte con la deducción.</p>
            <p>🟢 <b>Fácil (con pistas):</b> Te muestra fichas coloreadas indicando si el dígito y su posición son correctos.</p>
            <p>🟠 <b>Difícil (sin pistas):</b> Te indica mediante números de colores cuántos aciertos totales tienes, sin decirte en qué posición exacta van.</p>
        `
    },
    en: {
        appName: "Find Code",
        subtitle: "A logic, deduction, and strategy game to crack the code.",
        mode_solo: "🤖 Play vs AI",
        mode_same: "📱 Same Phone (Turns)",
        mode_two: "📱📱 Two Phones (Local)",
        mode_share: "🌐 Create Link Challenge",
        confirm: "Confirm & Play",
        back: "Back to Menu",
        exit: "Exit",
        guess_btn: "Test Code",
        discard_title: "Discard panel (tap to cross out numbers):",
        play_again: "🔄 Play Again",
        back_menu: "Main Menu",
        share_result: "📤 Share result",
        challenge_back: "⚔️ Challenge back!",
        rules_title: "How to Play",
        rules_close: "Got it, let's play!",
        win_title: "CODE CRACKED!",
        difficulty_label: "Difficulty:",
        challenged_desc: "What would you like to do with this challenge?",
        play_only: "Just guess this challenge",
        challenge_back_option: "Accept & Challenge Back",
        rules_text: `
            <p>🎯 <b>Goal:</b> Guess the secret 4-unique-digit code.</p>
            <p>📝 <b>Discard Panel:</b> Tap numbers below to cross them out and aid logic.</p>
            <p>🟢 <b>Easy (with clues):</b> Colored tiles indicate correct digits and positions.</p>
            <p>🟠 <b>Hard (no clues):</b> Numeric color totals without exact positions.</p>
        `
    },
    ja: {
        appName: "Find Code",
        subtitle: "暗号を解読する論理と推論のパズルゲーム。",
        mode_solo: "🤖 AI対戦",
        mode_same: "📱 同じスマホでプレイ",
        mode_two: "📱📱 2台のスマホでプレイ",
        mode_share: "🌐 挑戦状を作成",
        confirm: "確認してスタート",
        back: "メニューに戻る",
        exit: "終了",
        guess_btn: "コードを試す",
        discard_title: "除外パネル（タップして消去）：",
        play_again: "🔄 もう一度プレイ",
        back_menu: "メインメニュー",
        share_result: "📤 結果をシェア",
        challenge_back: "⚔️ 逆挑戦する！",
        rules_title: "遊び方",
        rules_close: "了解、ゲーム開始！",
        win_title: "暗号解読成功！",
        difficulty_label: "難易度:",
        challenged_desc: "どう挑戦しますか？",
        play_only: "推測のみ行う",
        challenge_back_option: "挑戦を受けて逆挑戦",
        rules_text: `
            <p>🎯 <b>目的:</b> 4桁の重複しない暗号コードを解読せよ。</p>
            <p>📝 <b>除外パネル:</b> 数字をタップして推理の助けにしよう。</p>
            <p>🟢 <b>簡単 (ヒント付き):</b> 数字と位置が合っているか色で表示。</p>
            <p>🟠 <b>難しい (ヒントなし):</b> 位置を教えず総数のみ表示。</p>
        `
    },
    zh: {
        appName: "Find Code",
        subtitle: "充满逻辑、推理与策略的密码破译游戏。",
        mode_solo: "🤖 人机对战",
        mode_same: "📱 同机轮流玩",
        mode_two: "📱📱 双机面对面",
        mode_share: "🌐 创建挑战链接",
        confirm: "确认并开始",
        back: "返回菜单",
        exit: "退出",
        guess_btn: "提交猜测",
        discard_title: "排除面板（点击划掉数字）：",
        play_again: "🔄 再玩一次",
        back_menu: "主菜单",
        share_result: "📤 分享结果",
        challenge_back: "⚔️ 反向挑战！",
        rules_title: "游戏规则",
        rules_close: "明白，开始游戏！",
        win_title: "密码破译成功！",
        difficulty_label: "难度:",
        challenged_desc: "你想怎么处理这个挑战？",
        play_only: "仅猜测此挑战",
        challenge_back_option: "接受并反向挑战",
        rules_text: `
            <p>🎯 <b>目标:</b> 猜出由4个不重复数字组成的秘密密码。</p>
            <p>📝 <b>排除面板:</b> 点击下方数字辅助排除逻辑。</p>
            <p>🟢 <b>简单 (有提示):</b> 颜色方块提示数字与位置。</p>
            <p>🟠 <b>困难 (无提示):</b> 仅提供总数提示，不指明位置。</p>
        `
    }
};

let currentLang = 'es';
let currentDifficulty = 'easy';
let secretCode = '';
let gameMode = 'solo';
let attemptCount = 0;
let challengerName = '';

document.addEventListener('DOMContentLoaded', () => {
    setupNumericInputs();
    buildDiscardBoard();
    changeLanguage('es');
    checkUrlForSharedGame();
});

function showToast(message) {
    const toast = document.getElementById('toastNotification');
    toast.innerText = message;
    toast.classList.add('show');
    setTimeout(() => {
        toast.classList.remove('show');
    }, 3500);
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

    document.getElementById('rulesBody').innerHTML = translations[lang].rules_text;
}

function setDifficulty(diff) {
    currentDifficulty = diff;
    document.getElementById('diffEasy').classList.toggle('active', diff === 'easy');
    document.getElementById('diffHard').classList.toggle('active', diff === 'hard');
}

function setGameMode(mode) {
    gameMode = mode;
    if (mode === 'solo') {
        secretCode = generateRandomCode();
        startGameSession();
    } else {
        document.getElementById('setupTitle').innerText = "Configura tu código secreto";
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
    document.getElementById('setupTitle').innerText = "Paso 1: Tu código secreto para el reto";
    showScreen('setupScreen');
}

function confirmSecretCode() {
    const inputs = document.querySelectorAll('#setupInputs input');
    let code = Array.from(inputs).map(i => i.value).join('');
    if (code.length !== 4 || new Set(code).size !== 4) {
        alert("Introduce 4 dígitos únicos.");
        return;
    }

    let nickname = document.getElementById('playerNickname').value.trim() || "Alguien";

    if (gameMode === 'link_host' || gameMode === 'link_revenge' || gameMode === 'link_guest_reply') {
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
            showScreen('guestWelcomeScreen');
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
    showScreen('gameScreen');
}

function submitGuess() {
    const inputs = document.querySelectorAll('#currentAttemptInputs input');
    let guess = Array.from(inputs).map(i => i.value).join('');

    if (guess.length !== 4 || new Set(guess).size !== 4) {
        alert("Introduce 4 dígitos únicos.");
        return;
    }

    attemptCount++;

    if (currentDifficulty === 'easy') {
        appendHistoryEasyRow(guess);
    } else {
        appendHistoryHardRow(guess);
    }

    inputs.forEach(i => i.value = '');
    inputs[0].focus();

    if (guess === secretCode) {
        playSound('success');
        document.getElementById('victoryCodeDisplay').innerText = secretCode.split('').join(' ');
        document.getElementById('victoryAttempts').innerText = attemptCount;
        document.getElementById('winModal').classList.add('active');
    }
}

function appendHistoryEasyRow(guess) {
    const container = document.getElementById('historyContainer');
    const row = document.createElement('div');
    row.className = 'history-row wordle-row';

    for (let i = 0; i < 4; i++) {
        const tile = document.createElement('div');
        tile.className = 'history-tile';
        tile.innerText = guess[i];

        if (guess[i] === secretCode[i]) {
            tile.classList.add('green');
        } else if (secretCode.includes(guess[i])) {
            tile.classList.add('orange');
        }
        row.appendChild(tile);
    }
    container.prepend(row);
}

// MODO DIFÍCIL: ÚNICAMENTE EL NÚMERO DENTRO DE LA PASTILLA DE COLOR CORRESPONDIENTE
function appendHistoryHardRow(guess) {
    let green = 0;
    let orange = 0;

    for (let i = 0; i < 4; i++) {
        if (guess[i] === secretCode[i]) {
            green++;
        } else if (secretCode.includes(guess[i])) {
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
    }
    startGameSession();
}

function shareResult() {
    let text = `🧠 ¡Descifré el código en Find Code en ${attemptCount} intentos! ¿Puedes superarme?`;
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
}

function goHome() {
    document.getElementById('winModal').classList.remove('active');
    document.getElementById('floatingHelpBtn').classList.remove('visible');
    window.location.hash = '';
    showScreen('mainMenu');
}
