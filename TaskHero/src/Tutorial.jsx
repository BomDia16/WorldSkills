import React, { useState } from 'react'
import TutorialCard from './components/TutorialCard'
import { useNavigate } from 'react-router-dom'
import imgTutorial1 from './assets/hero/tutorial1.png'
import imgTutorial2 from './assets/hero/tutorial2.png'
import imgTutorial3 from './assets/hero/tutorial3.png'

function Tutorial() {
    let [steps, setSteps] = useState(1)

    const navigate = useNavigate()

    function proximoTutorial() {
        if (steps == 1) {
            setSteps(2)
        } else if (steps == 2) {
            setSteps(3)
        } else {
            setSteps(1)
            navigate("/")
            localStorage.setItem('viuTutorial', 1)
        }
    }
    
    return (
        <div className='flex items-center flex-col'>
            {steps == 1 && <TutorialCard imagem={imgTutorial1} message={"Bem-vindo ao TaskHero! Complete tarefas e evolua seu herói."}></TutorialCard>}
            {steps == 2 && <TutorialCard imagem={imgTutorial2} message={"Ganhe pontos ao concluir missões e mantenha sua sequência."}></TutorialCard>}
            {steps == 3 && <TutorialCard imagem={imgTutorial3} message={"Acompanhe seu progresso e se torne mais produtivo."}></TutorialCard>}

            <button onClick={proximoTutorial} className='bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg shadow-md transition duration-150'>Próximo</button>
        </div>
    )
}

export default Tutorial