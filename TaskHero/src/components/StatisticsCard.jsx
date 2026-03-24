import React, { useEffect } from 'react'

function StatisticsCard() {

    useEffect(() => {
        document.getElementById("qtd_tarefas").innerHTML = localStorage.getItem("tasks_done")
        document.getElementById("qtd_pontos").innerHTML = localStorage.getItem("tasks_done")

        let nivel = ""

        if (localStorage.getItem("tasks_done") < 5) {
            nivel = "Iniciante"
        } else if (localStorage.getItem("tasks_done") < 10) {
            nivel = "Intermediário"
        } else {
            nivel = "Avançado"
        }

        document.getElementById("nivel").innerHTML = nivel

    }, [])

    return (
        <div className='bg-amber-200' style={{marginTop: "100px", width: "90%"}}>
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
    )
}

export default StatisticsCard