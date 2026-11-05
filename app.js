const translations = {
    es: {
        appName: "Find Code",
        subtitle: "Un juego de lógica, deducción y estrategia para descifrar el código.",
        mode_solo: "🤖 Jugar contra la IA",
        mode_same: "📱 Mismo Teléfono (Turnos)",
        mode_two: "📱📱 Dos Teléfonos (Presencial)",
        mode_share: "🌐 Crear Sala de Desafío (Enlace)",
        confirm: "Confirmar y Jugar",
        back: "Volver al menú",
        exit: "Salir",
        guess_btn: "Probar Código",
        discard_title: "Panel de descarte (toca para descartar números):",
        play_again: "Volver a jugar",
        back_menu: "Menú Principal",
        rules_title: "¿Cómo jugar?",
        rules_close: "¡Entendido, a jugar!",
        win_title: "¡Código Descifrado!",
        win_desc: "Has encontrado la combinación secreta con éxito.",
        difficulty_label: "Selecciona el modo de dificultad:",
        challenged_title: "¡Alguien te ha retado!",
        challenged_desc: "Prepárate para un duelo de lógica y descubre si puedes descifrar el código secreto.",
        accept_challenge: "Aceptar el reto y jugar",
        waiting_title: "Sala creada con éxito",
        waiting_desc: "El enlace ha sido copiado al portapapeles. Envíaselo a tu rival y espera a que abra la sala para comenzar.",
        copy_link_again: "Copiar enlace de nuevo",
        cancel: "Cancelar y salir",
        rules_text: `
            <p>🎯 <b>Objetivo:</b> Adivina el código secreto de 4 dígitos únicos.</p>
            <p>📝 <b>Panel de descarte:</b> Toca los números abajo para tachar y ayudarte con la deducción.</p>
            <p>🟢 <b>Modo Fácil:</b> Casillas coloreadas por dígito estilo Wordle.</p>
            <p>🟠 <b>Modo Difícil:</b> Pistas numéricas clásicas (cuántos acertaste en total sin decirte cuál).</p>
        `
    },
    en: {
        appName: "Find Code",
        subtitle: "A logic, deduction, and strategy game to crack the code.",
        mode_solo: "🤖 Play vs AI",
        mode_same: "📱 Same Phone (Turns)",
        mode_two: "📱📱 Two Phones (Local)",
        mode_share: "🌐 Create Challenge Room (Link)",
        confirm: "Confirm & Play",
        back: "Back to Menu",
        exit: "Exit",
        guess_btn: "Test Code",
        discard_title: "Discard panel (tap to cross out numbers):",
        play_again: "Play Again",
        back_menu: "Main Menu",
        rules_title: "How to Play",
        rules_close: "Got it, let's play!",
        win_title: "Code Cracked!",
        win_desc: "You successfully found the secret combination.",
        difficulty_label: "Select difficulty mode:",
        challenged_title: "You've been challenged!",
        challenged_desc: "Get ready for a logic duel and see if you can crack the secret code.",
        accept_challenge: "Accept challenge & play",
        waiting_title: "Room Created Successfully",
        waiting_desc: "The link has been copied to your clipboard. Send it to your rival and wait for them to open the room.",
        copy_link_again: "Copy link again",
        cancel: "Cancel & Exit",
        rules_text: `
            <p>🎯 <b>Goal:</b> Guess the secret 4-unique-digit code.</p>
            <p>📝 <b>Discard Panel:</b> Tap numbers below to cross them out and aid logic.</p>
            <p>🟢 <b>Easy Mode:</b> Wordle-style colored tiles per digit.</p>
            <p>🟠 <b>Hard Mode:</b> Classic numeric clues (totals only).</p>
        `
    },
    ja: {
        appName: "Find Code",
        subtitle: "暗号を解読する論理と推論のパズルゲーム。",
        mode_solo: "🤖 AI対戦",
        mode_same: "📱 同じスマホでプレイ",
        mode_two: "📱📱 2台のスマホでプレイ",
        mode_share: "🌐 挑戦ルームを作成 (リンク)",
        confirm: "確認してスタート",
        back: "メニューに戻る",
        exit: "終了",
        guess_btn: "コードを試す",
        discard_title: "除外パネル（タップして消去）：",
        play_again: "もう一度プレイ",
        back_menu: "メインメニュー",
        rules_title: "遊び方",
        rules_close: "了解、ゲーム開始！",
        win_title: "暗号解読成功！",
        win_desc: "見事に秘密のコードを見つけ出しました。",
        difficulty_label: "難易度を選択:",
        challenged_title: "挑戦状が届きました！",
        challenged_desc: "論理のデュuelの準備をして、暗号を解読しよう。",
        accept_challenge: "挑戦を受けてプレイ",
        waiting_title: "ルーム作成完了",
        waiting_desc: "リンクがコピーされました。ライバルに送信して、ルームが開かれるのを待ちましょう。",
        copy_link_again: "リンクをもう一度コピー",
        cancel: "キャンセル",
        rules_text: `
            <p>🎯 <b>目的:</b> 4桁の重複しない暗号コードを解読せよ。</p>
            <p>📝 <b>除外パネル:</b> 数字をタップして推理の助けにしよう。</p>
            <p>🟢 <b>簡単モード:</b> ワードル風の色付きタイル表示。</p>
            <p>🟠 <b>難しいモード:</b> 位置を教えないクラシックなヒント。</p>
        `
    },
    zh: {
        appName: "Find Code",
        subtitle: "充满逻辑、推理与策略的密码破译游戏。",
        mode_solo: "🤖 人机对战",
        mode_same: "📱 同机轮流玩",
        mode_two: "📱📱 双机面对面",
        mode_share: "🌐 创建挑战房间 (链接)",
        confirm: "确认并开始",
        back: "返回菜单",
        exit: "退出",
        guess_btn: "提交猜测",
        discard_title: "排除面板（点击划掉数字）：",
        play_again: "再玩一次",
        back_menu: "主菜单",
        rules_title: "游戏规则",
        rules_close: "明白，开始游戏！",
        win_title: "密码破译成功！",
        win_desc: "你已成功找出了秘密组合。",
        difficulty_label: "选择难度模式:",
        challenged_title: "你收到了挑战！",
        challenged_desc: "准备好进行逻辑对决，看看你能否破解秘密密码。",
        accept_challenge: "接受挑战并开始",
        waiting_title: "房间创建成功",
        waiting_desc: "链接已复制到剪贴板。发送给你的对手，等待对方打开房间。",
        copy_link_again: "再次复制链接",
        cancel: "取消并退出",
        rules_text: `
            <p>🎯 <b>目标:</b> 猜出由4个不重复数字组成的秘密密码。</p>
            <p>📝 <b>排除面板:</b> 点击下方数字来辅助排除逻辑。</p>
            <p>🟢 <b>简单模式:</b> 类似Wordle的逐字颜色提示。</p>
            <p>🟠 <b>困难模式:</b> 经典总数提示（不指定位置）。</p>
        `
    }
};

let currentLang = 'es';
let currentDifficulty = 'easy';
let secretCode = '';
let gameMode = 'solo';
let hostCode = '';
let lastGeneratedUrl = '';

document.addEventListener('DOMContentLoaded', () => {
    setupNumericInputs();
    buildDiscardBoard();
    changeLanguage('es');
    checkUrlForSharedGame();
});

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

// INICIAR CREACIÓN DE SALA (HOST)
function startHostLobby() {
    gameMode = 'link_host';
    document.getElementById('setupTitle').innerText = "Paso 1: Tu código secreto para la sala";
    showScreen('setupScreen');
}

function confirmSecretCode() {
    const inputs = document.querySelectorAll('#setupInputs input');
    let code = Array.from(inputs).map(i => i.value).join('');
    if (code.length !== 4 || new Set(code).size !== 4) {
        alert("Introduce 4 dígitos únicos.");
        return;
    }

    if (gameMode === 'link_host') {
        hostCode = code;
        inputs.forEach(i => i.value = '');
        
        let payload = btoa(JSON.stringify({ c: hostCode, d: currentDifficulty }));
        lastGeneratedUrl = `${window.location.origin}${window.location.pathname}#room=${payload}`;

        navigator.clipboard.writeText(lastGeneratedUrl).then(() => {
            showScreen('waitingScreen');
        }).catch(() => {
            prompt("Copia tu enlace de sala:", lastGeneratedUrl);
            showScreen('waitingScreen');
        });
    } else if (gameMode === 'link_guest') {
        inputs.forEach(i => i.value = '');
        startGameSession();
    } else {
        secretCode = code;
        inputs.forEach(i => i.value = '');
        startGameSession();
    }
}

function copyShareLinkAgain() {
    navigator.clipboard.writeText(lastGeneratedUrl).then(() => {
        alert("¡Enlace copiado de nuevo al portapapeles!");
    });
}

// LEER SALA SI ENTRA UN INVITADO
function checkUrlForSharedGame() {
    const hash = window.location.hash;
    if (hash.includes('#room=')) {
        try {
            let encoded = hash.split('#room=')[1];
            let roomData = JSON.parse(atob(encoded));
            secretCode = roomData.c; 
            currentDifficulty = roomData.d || 'easy'; 
            setDifficulty(currentDifficulty);

            gameMode = 'link_guest';
            showScreen('guestWelcomeScreen');
        } catch (e) {
            console.error("Sala inválida");
        }
    }
}

function acceptChallenge() {
    document.getElementById('setupTitle').innerText = "Configura tu código para el retador";
    showScreen('setupScreen');
}

function startGameSession() {
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

    if (currentDifficulty === 'easy') {
        appendHistoryEasyRow(guess);
    } else {
        appendHistoryHardRow(guess);
    }

    inputs.forEach(i => i.value = '');
    inputs[0].focus();

    if (guess === secretCode) {
        playSound('success');
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
            <span class="badge green">🟩 ${green}</span>
            <span class="badge orange">🟧 ${orange}</span>
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
