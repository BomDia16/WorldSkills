import React from 'react'
import audio from '../../assets/Midias/meditacao.mp3'
import img_sussa from '../../assets/Midias/Bob/sussa.png'
import './Style.css'

function Sussa() {
  return (
    <div className="container" style={{backgroundColor: "rgb(163, 255, 88)"}}>
        <nav>
            <a href="/"><img className="close" src="https://cdn-icons-png.flaticon.com/128/1828/1828778.png" alt="back" /></a>
        </nav>

        <img className="logo" src={img_sussa} alt="" />
        <br />
        
        <audio id="audio">
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

        <button className="avancar" id="btn-play-pause">▶ Tocar Meditação</button>

        <h2 style={{textAlign: "center"}}>FICAR SUSSA</h2>
    </div>
  )
}

export default Sussa