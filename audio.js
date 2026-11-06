// CONTROLADOR DE AUDIO - CANALES SEPARADOS PARA OST Y SFX
let isMusicOn = true;
let isSFXOn = true;

// Canales de música para la carpeta /ost en GitHub/Cloudflare
const audioTracks = {
    base: new Audio('ost/1.mp3'),
    tension: new Audio('ost/2.mp3'),
    climax: new Audio('ost/3.mp3')
};

// Configuración de loops
Object.values(audioTracks).forEach(track => {
    track.loop = true;
    track.volume = 0;
});

function toggleAudio() {
    isMusicOn = !isMusicOn;
    document.getElementById('soundToggle').innerText = isMusicOn ? '🎵' : '🔇';
    if (!isMusicOn) {
        stopAllMusic();
    } else {
        playMusicLayer('base');
    }
}

function toggleSFX() {
    isSFXOn = !isSFXOn;
    document.getElementById('sfxToggle').innerText = isSFXOn ? '🔊' : '🔕';
}

function playMusicLayer(layerName) {
    if (!isMusicOn) return;
    try {
        if (audioTracks[layerName]) {
            audioTracks[layerName].volume = 0.5;
            audioTracks[layerName].play().catch(() => {});
        }
    } catch(e) {}
}

function stopAllMusic() {
    Object.values(audioTracks).forEach(track => {
        track.pause();
        track.currentTime = 0;
    });
}

function playSound(type) {
    if (!isSFXOn) return;
    const ctx = new (window.AudioContext || window.webkitAudioContext)();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.connect(gain);
    gain.connect(ctx.destination);

    if (type === 'click') {
        osc.frequency.setValueAtTime(400, ctx.currentTime);
        gain.gain.setValueAtTime(0.1, ctx.currentTime);
        osc.start();
        osc.stop(ctx.currentTime + 0.05);
    } else if (type === 'success') {
        osc.frequency.setValueAtTime(600, ctx.currentTime);
        gain.gain.setValueAtTime(0.2, ctx.currentTime);
        osc.start();
        osc.stop(ctx.currentTime + 0.2);
    }
}
