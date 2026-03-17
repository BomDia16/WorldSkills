import React from 'react'
import tutorial1 from '../../assets/Midias/Bob/tutorial1.png'
import './Tutorial.css'

function Tutorial1() {
  return (
    <div class="container">
        <p>Seja bem-vindo ao "De Boas", onde você aprende meditação e fica sempre de boas.</p>
        <img src={tutorial1} alt="" />
        <a href="/tutorial2"><button class="avancar">Próximo</button></a>
    </div>
  )
}

export default Tutorial1