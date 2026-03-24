import React, { useState } from 'react'

function Tasks() {

    let task = [
        "limpar os vidros",
        "limpar a geladeira"
    ]

    const [hover, setHover] = useState(false)

    localStorage.setItem("tasks", task)
    let tasks = localStorage.getItem("tasks")

    const [items, setItems] = useState(tasks.split(","))
    
    const remover = (tarefa) => {
        setItems(prevLista => prevLista.filter(item => item !== tarefa));
    };

    const adicionar = () => {
        let tarefa = document.getElementById("nova_tarefa")
        setItems([...items, tarefa.value])
        tarefa.value = ""
    }

    return (
        <div className='bg-amber-200' style={{width: "70%", marginTop: "100px"}}>
            <h1>Tasks</h1>
            <input className='block text-gray-700 text-sm font-bold mb-2 border-b-2' type="text" name="" id="nova_tarefa" placeholder='Adicione uma nova tarefa' />
            <button
                onMouseEnter={() => setHover(true)}
                onMouseOut={() => setHover(false)}
                style={{cursor: hover ? 'pointer' : 'default'}}
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