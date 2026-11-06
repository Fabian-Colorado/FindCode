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
        ready_btn: "¡Estoy listo, empezar!",
        rules_general: `
            <p>🎯 <b>Objetivo:</b> Adivina el código secreto de 4 dígitos únicos (0 al 9).</p>
            <p>📝 <b>Panel superior:</b> Toca cualquier número para tacharlo en diagonal.</p>
        `,
        rules_solo: `<p>🤖 <b>Modo Solitario:</b> Adivina el código generado aleatoriamente.</p>`,
        rules_same: `
            <p>📱 <b>Mismo Teléfono (2 Jugadores):</b></p>
            <p>• Configuran sus códigos secretos por turnos.</p>
            <p>• Historiales y pistas independientes.</p>
            <p>• Si J1 adivina, J2 tiene una última oportunidad para empatar.</p>
        `,
        rules_two: `<p>📱📱 <b>Dos Teléfonos / Enlaces:</b> Comparte tu reto mediante enlace.</p>`
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
        ready_btn: "Ready, let's start!",
        rules_general: `<p>🎯 <b>Goal:</b> Guess the secret 4-unique-digit code.</p>`,
        rules_solo: `<p>🤖 <b>Solo Mode:</b> Practice against a random code.</p>`,
        rules_same: `<p>📱 <b>Same Phone:</b> Alternating turns with independent histories.</p>`,
        rules_two: `<p>📱📱 <b>Two Phones:</b> Share challenge links.</p>`
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
        rules_same: `<p>📱 <b>同じスマホ:</b> 履歴を分けて対戦。</p>`,
        rules_two: `<p>📱📱 <b>2台のスマホ:</b> リンク共有。</p>`
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
        rules_same: `<p>📱 <b>同机双人:</b> 独立历史记录轮流猜。</p>`,
        rules_two: `<p>📱📱 <b>双机:</b> 链接挑战。</p>`
    }
};

let currentLang = 'es';
let currentDifficulty = 'easy';
let gameMode = 'solo';

let secretCode = '';
let attemptCount = 0;
let challengerName = '';

let p1Code = '';
let p2Code = '';
let p1Attempts = 0;
let p2Attempts = 0;
let p1HistoryHTML = '';
let p2HistoryHTML = '';
let currentTurnPlayer = 1;
let pendingActionAfterPass = '';
let samePhoneState = 'playing';

document.addEventListener('DOMContentLoaded', () => {
    setupNumericInputs();
    buildDiscardBoard();
    changeLanguage('es');
    checkUrlForSharedGame();
    loadStats();

    window.history.pushState({ page: 'menu' }, '', '');
    window.addEventListener('popstate', () => {
        goHome();
        window.history.pushState({ page: 'menu' }, '', '');
    });
});

function showToast(message) {
    const toast = document.getElementById('toastNotification');
    toast.innerText = message;
    toast.classList.add('show');
    setTimeout(() => { toast.classList.remove('show'); }, 3500);
}

// CONFIGURACIÓN DE INPUTS NATIVOS CON SUSTITUCIÓN Y TECLA ENTER
function setupNumericInputs() {
    document.querySelectorAll('.numeric-only').forEach(input => {
        input.addEventListener('focus', () => input.select());
        
        input.addEventListener('input', (e) => {
            let val = e.target.value;
            if (val.length > 1) {
                e.target.value = val.slice(-1);
            }
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
            if (input.value && idx < inputs.length - 1) {
                inputs[idx + 1].focus();
            }
        });
        
        input.addEventListener('keydown', (e) => {
            if (e.key === 'Backspace' && !input.value && idx > 0) {
                inputs[idx - 1].focus();
            }
            if (e.key === 'Enter') {
                e.preventDefault();
                if (selector === '#currentAttemptInputs') {
                    submitGuess();
                } else {
                    confirmSecretCode();
                }
            }
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
    resetDiscardBoard();
    if (mode === 'solo') {
        updateRulesContent('solo');
        openRulesModal();
        secretCode = generateRandomCode();
        startGameSession();
    } else if (mode === 'same_phone') {
        updateRulesContent('same_phone');
        openRulesModal();
        p1Code = ''; p2Code = ''; p1Attempts = 0; p2Attempts = 0;
        p1HistoryHTML = ''; p2HistoryHTML = '';
        samePhoneState = 'playing';
        pendingActionAfterPass = 'p1_setup';
    } else {
        updateRulesContent('two_phones');
        openRulesModal();
        document.getElementById('setupTitle').innerText = "Configura tu código secreto";
    }
}

function closeRulesModal() {
    document.getElementById('rulesModal').classList.remove('active');

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
        let payload = btoa(JSON.stringify({ c: code, d: currentDifficulty, n: "Jugador" }));
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
    let card = document.getElementById('passCardContainer');
    let emoji = document.getElementById('passIconEmoji');
    let title = document.getElementById('passPhoneTitle');
    
    if (samePhoneState === 'p1_guessed_waiting_p2') {
        card.className = "game-card text-center alert-card";
        emoji.innerText = "🚨";
        title.innerText = "¡ALERTA MÁXIMA!";
        title.style.color = "#f59e0b";
    } else {
        card.className = "game-card text-center";
        emoji.innerText = "🔄";
        title.innerText = `Pasa el teléfono a: ${playerLabel}`;
        title.style.color = "var(--text-main)";
    }

    document.getElementById('passPhoneDesc').innerText = descriptionText;
    showScreen('passPhoneScreen');
}

function confirmPassPhone() {
    if (pendingActionAfterPass === 'p1_setup' || pendingActionAfterPass === 'p2_setup') {
        document.getElementById('setupTitle').innerText = `${pendingActionAfterPass === 'p1_setup' ? 'Jugador 1' : 'Jugador 2'}: Configura tu código`;
        showScreen('setupScreen');
    } else if (pendingActionAfterPass === 'p1_guess' || pendingActionAfterPass === 'p2_guess' || pendingActionAfterPass === 'p2_final_chance') {
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
            challengerName = "Tu amigo";
            
            setDifficulty(currentDifficulty);
            document.getElementById('challengerTitle').innerText = `¡Te han retado!`;
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
    document.getElementById('setupTitle').innerText = `Configura tu código para la revancha`;
    showScreen('setupScreen');
}

function startGameSession() {
    attemptCount = 0;
    resetDiscardBoard();
    
    if (gameMode === 'same_phone') {
        document.getElementById('historyContainer').innerHTML = (currentTurnPlayer === 1) ? p1HistoryHTML : p2HistoryHTML;
        let turnText = (samePhoneState === 'p1_guessed_waiting_p2') ? 
            `⚠️ ¡TURNO CRUCIAL: Intenta empatar! ⚠️` : 
            `Turno de: Jugador ${currentTurnPlayer}`;
        document.getElementById('turnIndicator').innerText = turnText;
    } else {
        document.getElementById('historyContainer').innerHTML = '';
        document.getElementById('turnIndicator').innerText = challengerName ? `Reto de ${challengerName}` : "Partida en curso";
    }

    showScreen('gameScreen');
}

function submitGuess() {
    document.querySelectorAll('#currentAttemptInputs input').forEach(input => input.blur());

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

    if (gameMode === 'same_phone') {
        if (currentTurnPlayer === 1) p1HistoryHTML = document.getElementById('historyContainer').innerHTML;
        else p2HistoryHTML = document.getElementById('historyContainer').innerHTML;
    }

    inputs.forEach(i => i.value = '');
    inputs[0].focus();

    if (guess === activeTargetCode) {
        playSound('success');
        handleVictory(activeTargetCode);
    } else {
        if (gameMode === 'same_phone') {
            if (samePhoneState === 'p1_guessed_waiting_p2') {
                showSamePhoneWinner(1);
            } else {
                currentTurnPlayer = (currentTurnPlayer === 1) ? 2 : 1;
                pendingActionAfterPass = (currentTurnPlayer === 1) ? 'p1_guess' : 'p2_guess';
                showPassPhoneScreen(`Jugador ${currentTurnPlayer}`, `Intento fallido. Pasa el teléfono al Jugador ${currentTurnPlayer} para su turno.`);
            }
        }
    }
}

function handleVictory(activeTargetCode) {
    if (gameMode === 'same_phone') {
        if (currentTurnPlayer === 1 && samePhoneState === 'playing') {
            samePhoneState = 'p1_guessed_waiting_p2';
            currentTurnPlayer = 2;
            pendingActionAfterPass = 'p2_final_chance';
            showPassPhoneScreen("Jugador 2", `¡EL JUGADOR 1 HA DESCIFRADO EL CÓDIGO! Jugador 2, tienes una última oportunidad para adivinar y empatar la partida.`);
            return;
        } else if (currentTurnPlayer === 2 && samePhoneState === 'p1_guessed_waiting_p2') {
            showSamePhoneDraw();
            return;
        } else {
            showSamePhoneWinner(2);
            return;
        }
    }

    document.getElementById('victoryBadgeLabel').innerText = "VICTORIA";
    document.getElementById('winTitleText').innerText = "¡CÓDIGO DESCIFRADO!";
    document.getElementById('codeLabelText').innerText = "EL CÓDIGO ERA:";
    document.getElementById('victoryCodeDisplay').innerText = activeTargetCode.split('').join(' ');
    document.getElementById('victoryAttempts').innerText = `${attemptCount} intentos`;
    document.getElementById('winModal').classList.add('active');
    saveStat(attemptCount);
}

function showSamePhoneWinner(winnerNum) {
    let winningAttempts = (winnerNum === 1) ? p1Attempts : p2Attempts;
    document.getElementById('victoryBadgeLabel').innerText = `GANADOR`;
    document.getElementById('winTitleText').innerText = `¡JUGADOR ${winnerNum} GANA!`;
    document.getElementById('codeLabelText').innerText = "CÓDIGOS SECRETOS DE LA PARTIDA:";
    document.getElementById('victoryCodeDisplay').innerHTML = `J1: ${p1Code}<br>J2: ${p2Code}`;
    document.getElementById('victoryAttempts').innerText = `Jugador ${winnerNum} lo logró en ${winningAttempts} intentos`;
    document.getElementById('winModal').classList.add('active');
    saveStat(winningAttempts);
}

function showSamePhoneDraw() {
    document.getElementById('victoryBadgeLabel').innerText = `EMPATE`;
    document.getElementById('winTitleText').innerText = `¡EMPATE ÉPICO!`;
    document.getElementById('codeLabelText').innerText = "CÓDIGOS SECRETOS DE LA PARTIDA:";
    document.getElementById('victoryCodeDisplay').innerHTML = `J1: ${p1Code}<br>J2: ${p2Code}`;
    document.getElementById('victoryAttempts').innerText = `Ambos adivinaron en igualdad de rondas`;
    document.getElementById('winModal').classList.add('active');
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
    const row1 = document.getElementById('numberPillsRow1');
    const row2 = document.getElementById('numberPillsRow2');
    row1.innerHTML = '';
    row2.innerHTML = '';
    
    for (let i = 0; i <= 4; i++) {
        const pill = document.createElement('div');
        pill.className = 'pill';
        pill.innerText = i;
        pill.onclick = () => {
            playSound('click');
            pill.classList.toggle('discarded');
        };
        row1.appendChild(pill);
    }
    
    for (let i = 5; i <= 9; i++) {
        const pill = document.createElement('div');
        pill.className = 'pill';
        pill.innerText = i;
        pill.onclick = () => {
            playSound('click');
            pill.classList.toggle('discarded');
        };
        row2.appendChild(pill);
    }
}

function resetDiscardBoard() {
    document.querySelectorAll('.pill').forEach(pill => {
        pill.classList.remove('discarded');
    });
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
    let text = `🧠 ¡Partida increíble en Find Code! ¿Puedes superarnos?`;
    if (navigator.share) {
        navigator.share({ title: 'Find Code', text: text, url: window.location.href }).catch(() => {});
    } else {
        navigator.clipboard.writeText(text).then(() => showToast("📋 ¡Resultado copiado al portapapeles!"));
    }
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
}

function showScreen(id) {
    document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
    document.getElementById(id).classList.add('active');
}

function goHome() {
    document.getElementById('winModal').classList.remove('active');
    window.location.hash = '';
    showScreen('mainMenu');
}
