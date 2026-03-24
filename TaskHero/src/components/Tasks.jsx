import React, { useState } from 'react'

function Tasks() {
    const [hover, setHover] = useState(false)

    let tasks = JSON.parse(localStorage.getItem("tasks")) || []
    let tarefas_concluidas = localStorage.getItem("tasks_done") || 0

    const [items, setItems] = useState(tasks)
    
    const remover = (tarefa) => {
        const nova_lista = items.filter(item => item !== tarefa)
        setItems(nova_lista);
        localStorage.setItem("tasks", JSON.stringify(nova_lista))
        localStorage.setItem("tasks_done", parseInt(tarefas_concluidas) + 1)
    };

    const adicionar = () => {
        let tarefa = document.getElementById("nova_tarefa")

        if (tarefa.value != "") {
            const nova_lista = [...items, tarefa.value]
            setItems(nova_lista)
            tarefa.value = ""
            localStorage.setItem('tasks', JSON.stringify(nova_lista))
        }
    }

    return (
        <div className='bg-amber-200' style={{width: "90%", marginTop: "100px"}}>
            <h1 className='text-xl'>Tasks</h1>
            <input className='block text-gray-700 text-sm font-bold mb-2 border-b-2' type="text" name="" id="nova_tarefa" placeholder='Adicione uma nova tarefa' />
            <button
                onMouseEnter={() => setHover(true)}
                onMouseOut={() => setHover(false)}
                style={{cursor: hover ? 'pointer' : 'default', marginBottom: "10px"}}
                type="submit"
                className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
                onClick={adicionar}>
                    Nova Tarefa
            </button>
            <hr />
            <ul>
                {items.map((item, index) => (
                    <li key={index}>{item}
                        <a
                         onMouseEnter={() => setHover(true)}
                         onMouseOut={() => setHover(false)}
                         style={{cursor: hover ? 'pointer' : 'default'}} onClick={() => remover(item)}> X</a>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Tasks