import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import criar from './assets/midias/criar.png'

function Adicionar() {

    const navigate = useNavigate()

    let tarefas_salvas = JSON.parse(localStorage.getItem("tarefas_pendentes"))
    console.log(tarefas_salvas)
    
    let [tarefas, setTarefas] = useState(tarefas_salvas)
    let [animar, setAnimar] = useState(false)

    function voltar() {
        navigate('/')
    }

    function salvar() {
        let titulo = document.getElementById('titulo').value
        let descricao = document.getElementById('descricao').value
        let status_select = document.getElementById('status').value

        if (titulo != "") {
            let dados = {
                'titulo': titulo,
                'descricao': descricao,
                'status': status_select
            }
            console.log(dados)
    
            tarefas.push(dados)
    
            setTarefas(tarefas)
            localStorage.setItem("tarefas_pendentes", JSON.stringify(tarefas))

            document.getElementById('titulo').value = ""
            document.getElementById('descricao').value = ""
            document.getElementById('erro').innerHTML = "Tarefa inserida com sucesso"
            ativarAnimacao()

        } else {
            document.getElementById('erro').innerHTML = "O título não pode ser vazio"
        }

    }

    function ativarAnimacao() {
        setAnimar(true)

        setTimeout(() => {
            setAnimar(false)
        }, 2000)
    }

    function statistics() {
        navigate("/statistics")
    }

    return (
        <div className='flex flex-col items-center' style={{height: "480px", width: "320px", border: "1px solid black"}}>
            <nav className='h-15 w-full bg-blue-300 flex items-center justify-between'>
                <h1 onClick={voltar}>Voltar</h1>
                <h1>Adicionar</h1>
                <h1 onClick={statistics}>Estatísticas</h1>
            </nav>

            <p id='erro'></p>
            <p>Título da Tarefa</p>
            <input id="titulo" style={{border: "1px solid black"}} type="text" />

            <p>Descrição da Tarefa (Opcional)</p>
            <input id='descricao' style={{border: "1px solid black"}} type="text" />

            <p>Status</p>
            <select style={{border: "1px solid black"}} name="" id="status">
                <option value="Pendente">Pendente</option>
                <option value="Em andamento">Em andamento</option>
                <option value="Finalizada">Finalizada</option>
            </select>
            <button className='hover:bg-gray-400 hover:cursor-pointer' onClick={salvar} style={{border: "1px solid black", marginTop: "10px"}}>Salvar</button>

            <img className={` mt-10 h-30 ${animar ? 'animate-bounce' : ''}`} 
            src={criar} alt="" />
        </div>
    )
}

export default Adicionar