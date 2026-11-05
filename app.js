const translations = {
    es: {
        appName: "Find Code",
        subtitle: "Un juego de lógica, deducción y estrategia.",
        mode_solo: "🤖 Jugar contra la IA",
        mode_same: "📱 Mismo Teléfono (Turnos)",
        mode_two: "📱📱 Dos Teléfonos (Presencial)",
        mode_share: "🌐 Crear Desafío por Enlace",
        confirm: "Confirmar y Jugar",
        back: "Volver al menú",
        exit: "Salir",
        guess_btn: "Probar Código",
        discard_title: "Panel de descarte (toca para tachar):",
        play_again: "Jugar de nuevo",
        rules_title: "¿Cómo jugar a Find Code?",
        rules_close: "¡Entendido!",
        rules_text: `
            <p>🎯 <b>Objetivo:</b> Adivinar el código secreto de 4 dígitos únicos.</p>
            <p>🟩 <b>Verde:</b> El número existe y está en la posición correcta.</p>
            <p>🟧 <b>Naranja:</b> El número existe pero está en la posición incorrecta.</p>
            <p>⬜ <b>Gris:</b> El número no forma parte del código.</p>
        `
    },
    en: {
        appName: "Find Code",
        subtitle: "A game of logic, deduction, and strategy.",
        mode_solo: "🤖 Play vs AI",
        mode_same: "📱 Same Phone (Turns)",
        mode_two: "📱📱 Two Phones (Local)",
        mode_share: "🌐 Create Link Challenge",
        confirm: "Confirm & Play",
        back: "Back to Menu",
        exit: "Exit",
        guess_btn: "Test Code",
        discard_title: "Discard panel (tap to cross out):",
        play_again: "Play Again",
        rules_title: "How to play Find Code?",
        rules_close: "Got it!",
        rules_text: `
            <p>🎯 <b>Goal:</b> Guess the secret 4-unique-digit code.</p>
            <p>🟩 <b>Green:</b> Correct digit in the correct position.</p>
            <p>🟧 <b>Orange:</b> Correct digit, but wrong position.</p>
            <p>⬜ <b>Gray:</b> Digit is not in the code.</p>
        `
    },
    ja: {
        appName: "ファインドコード",
        subtitle: "論理と推論のパズルゲーム。",
        mode_solo: "🤖 AI対戦",
        mode_same: "📱 同じスマホでプレイ",
        mode_two: "📱📱 2台のスマホでプレイ",
        mode_share: "🌐 挑戦状を作成",
        confirm: "確認してスタート",
        back: "メニューに戻る",
        exit: "終了",
        guess_btn: "コードを試す",
        discard_title: "除外パネル（タップして消去）：",
        play_again: "もう一度プレイ",
        rules_title: "ルール説明",
        rules_close: "了解！",
        rules_text: `
            <p>🎯 <b>目的:</b> 4桁の重複しない暗号コードを解読せよ。</p>
            <p>🟩 <b>緑色:</b> 数字も位置も合っている。</p>
            <p>🟧 <b>オレンジ:</b> 数字は合っているが位置が違う。</p>
            <p>⬜ <b>灰色:</b> コードに含まれていない。</p>
        `
    },
    zh: {
        appName: "密码解客 (Find Code)",
        subtitle: "逻辑、推理与策略的益智游戏。",
        mode_solo: "🤖 人机对战",
        mode_same: "📱 同机轮流玩",
        mode_two: "📱📱 双机面对面",
        mode_share: "🌐 生成分享链接",
        confirm: "确认并开始",
        back: "返回菜单",
        exit: "退出",
        guess_btn: "提交猜测",
        discard_title: "排除面板（点击划掉数字）：",
        play_again: "再玩一次",
        rules_title: "游戏规则",
        rules_close: "明白！",
        rules_text: `
            <p>🎯 <b>目标:</b> 猜出由4个不重复数字组成的秘密密码。</p>
            <p>🟩 <b>绿色:</b> 数字和位置完全正确。</p>
            <p>🟧 <b>橙色:</b> 数字正确但位置错误。</p>
            <p>⬜ <b>灰色:</b> 密码中不包含该数字。</p>
        `
    }
};

let currentLang = 'es';
let secretCode = '';

document.addEventListener('DOMContentLoaded', () => {
    setupNumericInputs();
    buildDiscardBoard();
});

// RESTRICTION: SOLO DIGITOS (0-9)
function setupNumericInputs() {
    document.querySelectorAll('.numeric-only').forEach(input => {
        input.addEventListener('beforeinput', (e) => {
            if (e.data && !/^[0-9]$/.test(e.data)) {
                e.preventDefault();
            }
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

function setGameMode(mode) {
    openRulesModal();
    if (mode === 'solo') {
        secretCode = generateRandomCode();
        startGameSession();
    } else {
        showScreen('setupScreen');
    }
}

function generateRandomCode() {
    let digits = ['0','1','2','3','4','5','6','7','8','9'];
    digits.sort(() => Math.random() - 0.5);
    return digits.slice(0, 4).join('');
}

function confirmSecretCode() {
    const inputs = document.querySelectorAll('#setupInputs input');
    let code = Array.from(inputs).map(i => i.value).join('');
    if (code.length !== 4 || new Set(code).size !== 4) {
        alert("Introduce 4 dígitos únicos.");
        return;
    }
    secretCode = code;
    inputs.forEach(i => i.value = '');
    startGameSession();
}

function startGameSession() {
    document.getElementById('historyContainer').innerHTML = '';
    showScreen('gameScreen');
}

// EVALUACIÓN ESTILO WORDLE (DIGITO POR DIGITO CON COLOR)
function submitGuess() {
    const inputs = document.querySelectorAll('#currentAttemptInputs input');
    let guess = Array.from(inputs).map(i => i.value).join('');

    if (guess.length !== 4 || new Set(guess).size !== 4) {
        alert("Introduce 4 dígitos únicos.");
        return;
    }

    appendHistoryWordleRow(guess);
    inputs.forEach(i => i.value = '');
    inputs[0].focus();

    if (guess === secretCode) {
        playSound('success');
        document.getElementById('winModal').classList.add('active');
    }
}

function appendHistoryWordleRow(guess) {
    const container = document.getElementById('historyContainer');
    const row = document.createElement('div');
    row.className = 'history-row';

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

function openRulesModal() {
    changeLanguage(currentLang);
    const modal = document.getElementById('rulesModal');
    modal.classList.add('active');
    document.getElementById('floatingHelpBtn').classList.remove('visible');
}

function closeRulesModal() {
    const modal = document.getElementById('rulesModal');
    modal.classList.remove('active');
    document.getElementById('floatingHelpBtn').classList.add('visible');
}

function showScreen(id) {
    document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
    document.getElementById(id).classList.add('active');
}

function goHome() {
    document.getElementById('winModal').classList.remove('active');
    document.getElementById('floatingHelpBtn').classList.remove('visible');
    showScreen('mainMenu');
}

function toggleTheme() {
    const isDark = document.body.getAttribute('data-theme') === 'dark';
    document.body.setAttribute('data-theme', isDark ? 'light' : 'dark');
    document.getElementById('themeToggle').innerText = isDark ? '🌙' : '☀️';
}
