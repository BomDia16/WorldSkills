import React, { useEffect } from 'react'
import tutorial1 from '../../assets/Midias/Bob/tutorial1.png'
import './Tutorial.module.css'
import { useNavigate } from 'react-router-dom'

function Tutorial1() {
  
    const viuTutorial = localStorage.getItem('viuTutorial') || 0

    const navigate = useNavigate()
    useEffect(() => {
        if (viuTutorial != 0) {
          navigate('/')
        }
    }, [])

    function viuTutorial1() {
      localStorage.setItem('viuTutorial1', 1)
    }

  return (
    <div className="container" style={{justifyContent:"space-around", }}>
        <p style={{width: "80%"}}>Seja bem-vindo ao "De Boas", onde você aprende meditação e fica sempre de boas.</p>
        <img style={{height:"200px", width: "200px"}} src={tutorial1} alt="" />
        <a href="/tutorial2" onClick={viuTutorial1}><button style={{width:"100%", cursor: "pointer"}} className="">Próximo</button></a>
    </div>
  )
}

export default Tutorial1