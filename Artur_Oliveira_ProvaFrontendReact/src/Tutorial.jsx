import React, { useEffect, useState } from 'react'
import TutorialCard from './components/TutorialCard'
import tutorial1 from './assets/midias/tutorial1.png'
import tutorial2 from './assets/midias/tutorial2.png'
import tutorial3 from './assets/midias/tutorial3.png'
import { useNavigate } from 'react-router-dom'

function Tutorial() {

    const navigate = useNavigate()

    let [step, setStep] = useState(1)

    let viuTutorial = localStorage.getItem("viuTutorial") || 0

    useEffect(() => {
        if (parseInt(viuTutorial) > 0) {
            navigate('/')
        }
    }, [])
    

    function proximo() {
        if (step == 1) {
            setStep(2)
        } else if (step == 2) {
            setStep(3)
            document.getElementById('botao').innerHTML = "Começar"
        } else {
            navigate("/")
            setStep(1)
            localStorage.setItem("viuTutorial", 1)
        }
    }

    function voltar() {
        if (step == 2) {
            setStep(1)
        } else if (step == 3) {
            setStep(2)
            document.getElementById('botao').innerHTML = "Começar"
        }
    }

    return (
        <>
        <div className='flex flex-col justify-between items-center' style={{height: "480px", width: "320px", border: "1px solid black"}}>
            {step == 1 && <TutorialCard titulo={"Bem-vindo ao DailyFlow"} imagem={tutorial1} mensagem={"Organize sua rotina e mantenha suas tarefas sob controle de forma simples."} botao={"Próximo"}></TutorialCard>}
            {step == 2 && <TutorialCard titulo={"Organize suas tarefas"} imagem={tutorial2} mensagem={"Crie tarefas, defina status e acompanhe tudo em um só lugar."} botao={"Próximo"}></TutorialCard>}
            {step == 3 && <TutorialCard titulo={"Acompanhe seu progresso"} imagem={tutorial3} mensagem={"Veja sua evolução e complete suas tarefas para manter o fluxo."} botao={"Próximo"}></TutorialCard>}
            <div>
                <button id='voltar' onClick={voltar}>Voltar</button>
                <button id='botao' onClick={proximo}>Próximo</button>
            </div>
            
        </div>
   </> )
}

export default Tutorial