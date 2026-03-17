const audio = document.getElementById("audio")

// audio.addEventListener("loadedmetadata", () => {
//     console.log("Duração total (s):", audio.duration);
// });

const btnPlayPause = document.getElementById('btn-play-pause');
const tempoAudio = document.getElementById("tempo-audio")
const viuTutorial = localStorage.getItem("viuTutorial")
document.addEventListener('DOMContentLoaded', function() {
    if (viuTutorial == 0) {
        window.location.href = '../tutoriais/tutorial1.html'
    }
})

let tempo1 = parseInt(localStorage.getItem('tempo1')) || 0;  // Inicia com o valor salvo no localStorage, se existir
let quantidadeTempo1 = parseInt(localStorage.getItem('quantidadeTempo1')) || 0;

let intervalo;  // Variável para armazenar o setInterval

const progressBar = document.getElementById('progress-bar');
const mostrarFaltando = document.getElementById('mostrarFaltando')

btnPlayPause.addEventListener('click', function() {
    if (audio.paused) {
        audio.play();
        btnPlayPause.innerText = "⏸ Pausar Meditação";
        
        // Inicia o setInterval para acumular o tempo de 1 em 1 segundo
        intervalo = setInterval(() => {
            tempo1 += 1;  // Incrementa o tempo
            localStorage.setItem('tempo1', tempo1);  // Salva no localStorage
        }, 1000);
        
    } else {
        audio.pause();
        btnPlayPause.innerText = "▶ Tocar Meditação";
        
        // Para o setInterval quando a meditação é pausada
        clearInterval(intervalo);  // Cancela o setInterval
    }
});

audio.addEventListener('timeupdate', function() {
    tempoAudio.innerHTML = "0:" + this.currentTime.toFixed(0).padStart(2, "0");
    
    // Exibe o tempo total de audição
    console.log(localStorage.getItem('tempo1'));
    const value = audio.currentTime.toFixed(0);
    progressBar.value = value;
    let tempoFaltando = 60 - audio.currentTime
    mostrarFaltando.innerHTML = "-0:" + tempoFaltando.toFixed(0).padStart(2, "0");
    
    // Quando o áudio atinge 60 segundos, reinicia, mas sem adicionar tempo extra
    if (this.currentTime >= 60) {
        localStorage.setItem('quantidadeTempo1', quantidadeTempo1 + 1)
        this.pause();  // Pausa o áudio
        this.currentTime = 0;  // Reinicia o áudio
        btnPlayPause.innerText = "▶ Tocar Meditação";
        
        // Para o setInterval ao reiniciar o áudio
        clearInterval(intervalo);  // Cancela o setInterval anterior
    }
});