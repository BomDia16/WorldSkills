import React from 'react'
import tutorial3 from '../../assets/Midias/Bob/tutorial3.png'

function Tutorial3() {
  return (
    <div class="container">
        <p>Você pode acompanhar sua evolução em ficar "De boas" com as nossas estatísticas inteligentes.</p>
        <img src={tutorial3} alt="" />
        <a href="/"><button class="avancar">Próximo</button></a>
    </div>
  )
}

export default Tutorial3