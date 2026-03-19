import React, { useEffect } from 'react'
import tutorial3 from '../../assets/Midias/Bob/tutorial3.png'
import { useNavigate } from 'react-router-dom'

function Tutorial3() {

    const viuTutorial = localStorage.getItem('viuTutorial') || 0

    useEffect(() => {
        if (viuTutorial != 0) {
          navigate('/')
        }
    }, [])

    const navigate = useNavigate()

    function voltar() {
        navigate('tutorial1')
    }

    function terminarTutorial() {
      localStorage.setItem('viuTutorial', 1)
    }

  return (
    <div class="container" style={{justifyContent:"space-around", }}>
        <p style={{width: "80%"}}>Você pode acompanhar sua evolução em ficar "De boas" com as nossas estatísticas inteligentes.</p>
        <img style={{height:"200px", width: "200px"}} src={tutorial3} alt="" />
        <a onClick={terminarTutorial} href="/"><button style={{width:"100%", cursor: "pointer"}} class="">Próximo</button></a>
    </div>
  )
}

export default Tutorial3