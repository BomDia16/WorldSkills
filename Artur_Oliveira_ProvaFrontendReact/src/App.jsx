import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import { useNavigate } from 'react-router-dom'
import pouco from './assets/midias/pouco.png'
import medio from './assets/midias/tutorial1.png'
import alto from './assets/midias/Tela_incial.png'

function App() {

  const navigate = useNavigate()

  let viuTutorial = localStorage.getItem("viuTutorial") || 0
  
      useEffect(() => {
          if (parseInt(viuTutorial) == 0) {
              navigate('/tutorial')
          }
      }, [])

    function adicionar() {
      navigate('/adicionar')
    }

    let inicial = localStorage.getItem('tarefas_pendentes')
    if (!inicial) {
      localStorage.setItem('tarefas_pendentes', JSON.stringify([]))
    }

    let tarefas_salvas = JSON.parse(localStorage.getItem('tarefas_pendentes'))

    let [tarefas, setTarefas] = useState(tarefas_salvas)

    function statistics() {
      navigate('/statistics')
    }

  return (
      <>
          <div className='flex flex-col justify-between items-center' style={{height: "480px", width: "320px", border: "1px solid black"}}>
            <nav className='h-15 w-full bg-blue-300 flex items-center justify-center'>
                <h1>Home</h1>
                <h1 onClick={statistics}>Estatísticas</h1>
            </nav>
            <div className='h-90 w-full' id='tarefas'>
              {tarefas.map(tarefa =>
                <div style={{marginTop: "10px"}} className='w-full h-10 bg-gray-300 flex justify-around'>
                  <p key={tarefa.titulo}>{tarefa.titulo}</p>
                  {tarefa.status == "Pendente" && <p className=' text-amber-500'>{tarefa.status}</p>}
                  {tarefa.status == "Finalizada" && <p className=' text-green-500'>{tarefa.status}</p>}
                  {tarefa.status == "Em andamento" && <p className=' text-yellow-500'>{tarefa.status}</p>}
                </div>
              )}
            </div>
            <div>
              <button onClick={adicionar}>Adicionar Tarefa +</button>
            </div>

            {tarefas.length < 5 && <img className='h-10' src={pouco} />}
            {tarefas.length > 4 && tarefas.length < 10 && <img className='h-10' src={medio} />}
            {tarefas.length > 10 && <img className='h-10' src={alto} />}
          </div>
      </>
  )
}

export default App
