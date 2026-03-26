import React, { useState } from 'react'
import TutorialCard from './components/TutorialCard'
import { useNavigate } from 'react-router-dom'

function Tutorial() {
    let [tutorial1, setTutorial1] = useState(true)
    let [tutorial2, setTutorial2] = useState(false)
    let [tutorial3, setTutorial3] = useState(false)

    const navigate = useNavigate()

    function proximoTutorial() {
        if (tutorial1) {
            setTutorial1(false)
            setTutorial2(true)
        } else if (tutorial2) {
            setTutorial2(false)
            setTutorial3(true)
        } else {
            setTutorial3(false)
            setTutorial1(true)
            navigate("/")
            localStorage.setItem('viuTutorial', 1)
        }
    }
    
    return (
        <div className='flex items-center flex-col'>
            {tutorial1 && <TutorialCard message={"Bem-vindo ao TaskHero! Complete tarefas e evolua seu herói."}></TutorialCard>}
            {tutorial2 && <TutorialCard message={"Ganhe pontos ao concluir missões e mantenha sua sequência."}></TutorialCard>}
            {tutorial3 && <TutorialCard message={"Acompanhe seu progresso e se torne mais produtivo."}></TutorialCard>}

            <button onClick={proximoTutorial} className='bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg shadow-md transition duration-150'>Próximo</button>
        </div>
    )
}

export default Tutorial