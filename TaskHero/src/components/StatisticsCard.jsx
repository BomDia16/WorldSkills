import React, { useEffect, useState } from 'react'
import imgIniciante from '../assets/hero/iniciante.png'
import imgIntermediario from '../assets/hero/intermediario.png'
import imgAvancado from '../assets/hero/avancado.png'

function StatisticsCard() {

    let [imagem, setImagem] = useState()

    useEffect(() => {
        document.getElementById("qtd_tarefas").innerHTML = localStorage.getItem("tasks_done") || 0
        document.getElementById("qtd_pontos").innerHTML = localStorage.getItem("pontos") || 0

        let nivel = ""

        if (localStorage.getItem("tasks_done") < 5) {
            nivel = "Iniciante"
            setImagem(imgIniciante)
        } else if (localStorage.getItem("tasks_done") < 10) {
            nivel = "Intermediário"
            setImagem(imgIntermediario)
        } else {
            nivel = "Avançado"
            setImagem(imgAvancado)
        }

        document.getElementById("nivel").innerHTML = nivel

    }, [])

    return (
        <div className='flex flex-col items-center'>
            <img style={{marginTop: "20px"}} className='h-20 animate-bounce' src={imagem} alt="" />
            <div className='bg-amber-200' style={{marginTop: "20px", width: "90%"}}>
                <p className='text-xl'>Estatísticas</p>
                <hr />
                <p className='text-lg'>Quantidade de tarefas realizadas:</p>
                <p id='qtd_tarefas'></p>
                <hr />

                <p className='text-lg'>Pontos:</p>
                <p id='qtd_pontos'></p>
                <hr />

                <p className='text-lg'>Nível atual:</p>
                <p id='nivel'></p>
                <hr />
            </div>
        </div>
    )
}

export default StatisticsCard