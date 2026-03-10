const audio = document.getElementById("audio")

// audio.addEventListener("loadedmetadata", () => {
//     console.log("Duração total (s):", audio.duration);
// });

const btnPlayPause = document.getElementById('btn-play-pause');
const tempoAudio = document.getElementById("tempo-audio")

// let tempo1 = parseInt(localStorage.getItem('tempo1'))

// btnPlayPause.addEventListener('click', function() {
//     if (audio.paused) {
//         audio.play();
//         btnPlayPause.innerText = "⏸ Pausar Meditação";
//     } else {
//         audio.pause();
//         btnPlayPause.innerText = "▶ Tocar Meditação";
//         localStorage.setItem('tempo1', tempo1)
//     }
// });

// audio.addEventListener('timeupdate', function() {
//     tempoAudio.innerHTML = "0:"+this.currentTime.toFixed(0).padStart(2, "0")
//     tempo1 = Math.floor(this.currentTime)
//     console.log(localStorage.getItem('tempo1'))
//     if (this.currentTime >= 60) {
//         this.pause();
//         localStorage.setItem('tempo1', tempo1)
//         this.currentTime = 0;
//         btnPlayPause.innerText = "▶ Tocar Meditação";
//     }
// });

let tempo1 = parseInt(localStorage.getItem('tempo1')) || 0;  // Inicia com o valor salvo no localStorage, se existir
let quantidadeTempo1 = parseInt(localStorage.getItem('quantidadeTempo1')) || 0;

let intervalo;  // Variável para armazenar o setInterval

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