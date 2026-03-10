const audio = document.getElementById("audio")

// audio.addEventListener("loadedmetadata", () => {
//     console.log("Duração total (s):", audio.duration);
// });

const btnPlayPause = document.getElementById('btn-play-pause');
const tempoAudio = document.getElementById("tempo-audio")

btnPlayPause.addEventListener('click', function() {
    if (audio.paused) {
        audio.play();
        btnPlayPause.innerText = "⏸ Pausar Meditação";
    } else {
        audio.pause();
        btnPlayPause.innerText = "▶ Tocar Meditação";
    }
});

audio.addEventListener('timeupdate', function() {
    tempoAudio.innerHTML = "0:"+this.currentTime.toFixed(0).padStart(2, "0")
    if (this.currentTime >= 60) {
        this.pause();
        this.currentTime = 0;
        btnPlayPause.innerText = "▶ Tocar Meditação";
    }
});