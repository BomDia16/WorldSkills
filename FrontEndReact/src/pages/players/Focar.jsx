import React from 'react'
import audio from '../../assets/Midias/meditacao.mp3'
import img_focar from '../../assets/Midias/Bob/focar.png'
import './Style.css'

function Focar() {

    let intervalo;
    function TocarPausar() {
        const audio = document.getElementById('audio')
        const btnPlayPause = document.getElementById('btn-play-pause')
        let tempo2 = parseInt(localStorage.getItem('tempo2')) || 0;  // Inicia com o valor salvo no localStorage, se existir
        let quantidadeTempo2 = parseInt(localStorage.getItem('quantidadeTempo2')) || 0;

          // Variável para armazenar o setInterval

        const progressBar = document.getElementById('progress-bar');
        const mostrarFaltando = document.getElementById('mostrarFaltando')
        if (audio.paused) {
            audio.play();
            btnPlayPause.innerText = "⏸ Pausar Meditação";
            
            // Inicia o setInterval para acumular o tempo de 2 em 2 segundo
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
    }

    const tempoAudio = document.getElementById("tempo-audio")

    function verificarTempo() {
        const tempoAudio = document.getElementById("tempo-audio")
        const audio = document.getElementById('audio')
        tempoAudio.innerHTML = "0:" + audio.currentTime.toFixed(0).padStart(2, "0");
        let quantidadeTempo2 = parseInt(localStorage.getItem('quantidadeTempo2')) || 0;

        let intervalo;  // Variável para armazenar o setInterval

        const progressBar = document.getElementById('progress-bar');
        const mostrarFaltando = document.getElementById('mostrarFaltando')
    
        // Exibe o tempo total de audição
        console.log(localStorage.getItem('tempo2'));
        const value = audio.currentTime.toFixed(0);
        progressBar.value = value;
        let tempoFaltando = 60 - audio.currentTime
        mostrarFaltando.innerHTML = "-0:" + tempoFaltando.toFixed(0).padStart(2, "0");
        
        // Quando o áudio atinge 60 segundos, reinicia, mas sem adicionar tempo extra
        if (audio.currentTime >= 60) {
            localStorage.setItem('quantidadeTempo2', quantidadeTempo2 + 1)
            audio.pause();  // Pausa o áudio
            audio.currentTime = 0;  // Reinicia o áudio
            btnPlayPause.innerText = "▶ Tocar Meditação";
            
            // Para o setInterval ao reiniciar o áudio
            clearInterval(intervalo);  // Cancela o setInterval anterior
        }
    }

    return (
        <div className="container" style={{backgroundColor: "rgb(255, 105, 105)"}}>
            <nav>
                <a href="/"><img className="close" src="https://cdn-icons-png.flaticon.com/128/1828/1828778.png" alt="back" /></a>
            </nav>
    
            <img className="logo" src={img_focar} alt="" />
            <br />
            
            <audio id="audio" onTimeUpdate={verificarTempo}>
                <source src={audio} />
            </audio>
    
            <div style={{
                display: "flex",
                justifyContent: "space-around"
                }}>
                <p id="tempo-audio"></p>
                <p id="mostrarFaltando"></p>
            </div>
            <input type="range" id="progress-bar" value="0" max="60" step="1" disabled />
    
            <button className="avancar" id="btn-play-pause" onClick={TocarPausar}>▶ Tocar Meditação</button>
    
            <h2 style={{textAlign: "center"}}>FOCAR NA TAREFA</h2>
        </div>
    )
}

export default Focar