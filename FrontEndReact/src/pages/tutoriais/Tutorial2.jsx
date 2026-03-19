import React from 'react'
import tutorial2 from '../../assets/Midias/Bob/tutorial2.png'
import { useNavigate } from 'react-router-dom'

function Tutorial2() {

  const viuTutorial = localStorage.getItem('viuTutorial') || 0

  const navigate = useNavigate()

  function voltar() {
      navigate('tutorial1')
  }
    document.addEventListener('DOMContentLoaded', function() {
        if (viuTutorial == 0) {
            voltar()
        }
    })


  return (
    <div class="container">
        <p>É divertido e ajudamos você a ficar motivado com recompensas pelo seu empenho em ficar "De Boas"</p>
        <img src={tutorial2} alt="" />
        <a href="/tutorial3"><button class="avancar">Próximo</button></a>
    </div>
  )
}

export default Tutorial2