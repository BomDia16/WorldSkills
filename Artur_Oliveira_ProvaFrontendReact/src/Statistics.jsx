import React from 'react'
import { useNavigate } from 'react-router-dom'
import pouco from './assets/midias/pouco.png'
import medio from './assets/midias/tutorial1.png'
import alto from './assets/midias/Tela_incial.png'

function Statistics() {

    const navigate = useNavigate()

    let tarefas = JSON.parse(localStorage.getItem('tarefas_pendentes'))
    let totalTarefas = tarefas.length
    let concluidos = (tarefas.filter((element) => element.status == 'Finalizada')).length
    let pendentes = (tarefas.filter((element) => element.status == 'Pendente')).length
    console.log(totalTarefas)

    function voltar() {
        navigate('/')
    }

    let porcentagem = (concluidos / totalTarefas) * 100
    
    return (
        <div className='flex flex-col justify-between items-center' style={{height: "480px", width: "320px", border: "1px solid black"}}>
            <nav className='h-15 w-full bg-blue-300 flex items-center justify-center'>
                <h1 onClick={voltar}>Voltar</h1>
                <h1>Estatísticas</h1>
            </nav>

            <div className='h-90'>
                <h1>Total de Tarefas: {totalTarefas}</h1>
                <h1>Total de Tarefas Concluídas: {concluidos}</h1>
                <h1>Total de Tarefas Concluídas: {pendentes}</h1>
            </div>

            {porcentagem < 10 && <img  className='h-20' src={pouco} />}
            {porcentagem > 9 && porcentagem < 50 && <img  className='h-20' src={medio} />}
            {porcentagem > 49 && <img  className='h-20' src={alto} />}
            <p>{porcentagem}% de tarefas concluídas</p>
        </div>
    )
}

export default Statistics