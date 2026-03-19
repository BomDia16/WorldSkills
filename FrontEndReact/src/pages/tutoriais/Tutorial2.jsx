import React from 'react'
import tutorial2 from '../../assets/Midias/Bob/tutorial2.png'
import { useNavigate } from 'react-router-dom'

function Tutorial2() {

  const viuTutorial = localStorage.getItem('viuTutorial') || 0
  const tutorial1 = localStorage.getItem('viuTutorial') || 0

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
    <div class="container" style={{justifyContent:"space-around", }}>
        <p style={{width: "80%"}}>É divertido e ajudamos você a ficar motivado com recompensas pelo seu empenho em ficar "De Boas"</p>
        <img style={{height:"200px", width: "200px"}} src={tutorial2} alt="" />
        <a href="/tutorial3"><button style={{width:"100%", cursor: "pointer"}} class="">Próximo</button></a>
    </div>
  )
}

export default Tutorial2