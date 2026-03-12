const audio = document.getElementById("audio")

const btnPlayPause = document.getElementById('btn-play-pause');
const tempoAudio = document.getElementById("tempo-audio")
const viuTutorial = localStorage.getItem("viuTutorial")
document.addEventListener('DOMContentLoaded', function() {
    if (viuTutorial == 0) {
        window.location.href = '../tutoriais/tutorial1.html'
    }
})

let tempo2 = parseInt(localStorage.getItem('tempo2')) || 0;  // Inicia com o valor salvo no localStorage, se existir
let quantidadetempo2 = parseInt(localStorage.getItem('quantidadeTempo2')) || 0;

const progressBar = document.getElementById('progress-bar');
const mostrarFaltando = document.getElementById('mostrarFaltando')

let intervalo;  // Variável para armazenar o setInterval

btnPlayPause.addEventListener('click', function() {
    if (audio.paused) {
        audio.play();
        btnPlayPause.innerText = "⏸ Pausar Meditação";
        
        // Inicia o setInterval para acumular o tempo de 1 em 1 segundo
        intervalo = setInterval(() => {
            tempo2 += 1;  // Incrementa o tempo
            localStorage.setItem('tempo2', tempo2);  // Salva no localStorage
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
    console.log(localStorage.getItem('tempo2'));
    const value = audio.currentTime.toFixed(0);
    progressBar.value = value;
    tempoFaltando = 60 - audio.currentTime
    mostrarFaltando.innerHTML = "-0:" + tempoFaltando.toFixed(0).padStart(2, "0");
    
    // Quando o áudio atinge 60 segundos, reinicia, mas sem adicionar tempo extra
    if (this.currentTime >= 60) {
        localStorage.setItem('quantidadeTempo2', quantidadetempo2 + 1)
        this.pause();  // Pausa o áudio
        this.currentTime = 0;  // Reinicia o áudio
        btnPlayPause.innerText = "▶ Tocar Meditação";
        
        // Para o setInterval ao reiniciar o áudio
        clearInterval(intervalo);  // Cancela o setInterval anterior
    }
});