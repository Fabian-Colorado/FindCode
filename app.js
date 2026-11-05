const translations = {
    es: {
        title: "Adivina el Código Secreto",
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
        play_again: "Jugar de nuevo"
    },
    en: {
        title: "Guess the Secret Code",
        subtitle: "A game of logic, deduction and strategy.",
        mode_solo: "🤖 Play vs AI",
        mode_same: "📱 Same Phone (Turns)",
        mode_two: "📱📱 Two Phones (Local)",
        mode_share: "🌐 Create Link Challenge",
        confirm: "Confirm & Play",
        back: "Back to Menu",
        exit: "Exit",
        guess_btn: "Test Code",
        discard_title: "Discard panel (tap to cross out):",
        play_again: "Play Again"
    },
    ja: {
        title: "シークレットコードを当てよう",
        subtitle: "論理と推論のゲーム。",
        mode_solo: "🤖 AI対戦",
        mode_same: "📱 同じスマホでプレイ",
        mode_two: "📱📱 2台のスマホでプレイ",
        mode_share: "🌐 リンクで挑戦状を作成",
        confirm: "確認してスタート",
        back: "メニューに戻る",
        exit: "終了",
        guess_btn: "コードを試す",
        discard_title: "除外パネル（タップして消去）：",
        play_again: "もう一度プレイ"
    },
    zh: {
        title: "猜密码游戏",
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
        play_again: "再玩一次"
    }
};

let currentLang = 'es';
let gameMode = 'solo';
let secretCode = '';
let targetPlayerCode = '';
let currentTurn = 1; // 1 o 2

function changeLanguage(lang) {
    currentLang = lang;
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[lang][key]) {
            el.innerText = translations[lang][key];
        }
    });
}

function toggleTheme() {
    const isDark = document.body.getAttribute('data-theme') === 'dark';
    document.body.setAttribute('data-theme', isDark ? 'light' : 'dark');
    document.getElementById('themeToggle').innerText = isDark ? '🌙' : '☀️';
}

function showScreen(screenId) {
    document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
    document.getElementById(screenId).classList.add('active');
}

function goHome() {
    document.getElementById('winModal').classList.remove('active');
    showScreen('mainMenu');
    resetInputs();
}

function setGameMode(mode) {
    gameMode = mode;
    if (mode === 'solo') {
        secretCode = generateRandomCode();
        startGameSession();
    } else if (mode === 'same_phone' || mode === 'two_phones') {
        document.getElementById('setupTitle').innerText = "Jugador 1: Pon tu código";
        showScreen('setupScreen');
    }
}

function generateRandomCode() {
    let digits = ['0','1','2','3','4','5','6','7','8','9'];
    digits.sort(() => Math.random() - 0.5);
    return digits.slice(0, 4).join('');
}

// Configuración de inputs automáticos
document.addEventListener('DOMContentLoaded', () => {
    initInputNavigation('.code-inputs');
    initInputNavigation('.current-attempt');
    buildDiscardBoard();
});

function initInputNavigation(containerSelector) {
    const container = document.querySelector(containerSelector);
    if (!container) return;
    const inputs = container.querySelectorAll('input');

    inputs.forEach((input, index) => {
        input.addEventListener('input', (e) => {
            playSound('click');
            const val = e.target.value;
            if (val && index < inputs.length - 1) {
                inputs[index + 1].focus();
            }
        });
        input.addEventListener('keydown', (e) => {
            if (e.key === 'Backspace' && !input.value && index > 0) {
                inputs[index - 1].focus();
            }
        });
    });
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

function submitGuess() {
    const inputs = document.querySelectorAll('.current-attempt input');
    let guess = Array.from(inputs).map(i => i.value).join('');

    if (guess.length !== 4 || new Set(guess).size !== 4) {
        alert("Introduce 4 dígitos únicos.");
        return;
    }

    let green = 0;
    let orange = 0;

    for (let i = 0; i < 4; i++) {
        if (guess[i] === secretCode[i]) {
            green++;
        } else if (secretCode.includes(guess[i])) {
            orange++;
        }
    }

    appendHistoryRow(guess, green, orange);
    inputs.forEach(i => i.value = '');
    inputs[0].focus();

    if (green === 4) {
        playSound('success');
        document.getElementById('winModal').classList.add('active');
    }
}

function appendHistoryRow(guess, green, orange) {
    const container = document.getElementById('historyContainer');
    const row = document.createElement('div');
    row.className = 'history-row';
    row.innerHTML = `
        <span>${guess}</span>
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

function openShareModal() {
    let code = generateRandomCode();
    alert("Simulación de enlace creado con clave secreta aleatoria. En la versión web final, esto genera una URL cifrada para enviar por WhatsApp o TikTok.");
}
