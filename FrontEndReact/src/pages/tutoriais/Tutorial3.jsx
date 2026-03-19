import React from 'react'
import tutorial3 from '../../assets/Midias/Bob/tutorial3.png'
import { useNavigate } from 'react-router-dom'

function Tutorial3() {

    const viuTutorial = localStorage.getItem('viuTutorial') || 0

    document.addEventListener('DOMContentLoaded', function() {
        if (viuTutorial == 0) {
            voltar()
        }
    })

    const navigate = useNavigate()

    function voltar() {
        navigate('tutorial1')
    }

    function terminarTutorial() {
      localStorage.setItem('viuTutorial', 1)
    }

  return (
    <div class="container">
        <p>Você pode acompanhar sua evolução em ficar "De boas" com as nossas estatísticas inteligentes.</p>
        <img src={tutorial3} alt="" />
        <a onClick={terminarTutorial()} href="/"><button class="avancar">Próximo</button></a>
    </div>
  )
}

export default Tutorial3