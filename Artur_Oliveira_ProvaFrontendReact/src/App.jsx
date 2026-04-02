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

    let [statusFiltro, setStatusFiltro] = useState("")

    let tarefasExibidas = statusFiltro ? tarefas.filter((p) => p.status == statusFiltro) : tarefas

    function alterarStatusTarefa(titulo, novoStatus) {
      // 1. Mapeia o array atual de tarefas
      const novasTarefas = tarefas.map(t => {
        if (t.titulo === titulo) {
          return { ...t, status: novoStatus }; // Atualiza apenas a tarefa alvo
        }
        return t;
      });

      // 2. Atualiza o estado (isso faz a tela atualizar)
      setTarefas(novasTarefas);

      // 3. Salva no localStorage para não perder ao dar F5
      localStorage.setItem('tarefas_pendentes', JSON.stringify(novasTarefas));
    }

  return (
      <>
          <div className='flex flex-col justify-between items-center' style={{height: "480px", width: "320px", border: "1px solid black"}}>
            <nav className='h-15 w-full bg-blue-300 flex items-center justify-center'>
                <h1>Home</h1>
                <h1 className='text-white font-bold p-1 hover:cursor-pointer bg-blue-400 hover:bg-blue-500 border-black border rounded-md' onClick={statistics}>Estatísticas</h1>
            </nav>
            <nav className='h-5 w-full bg-blue-300 flex items-center justify-center pb-1.5'>
                <select onChange={(e) => setStatusFiltro(e.target.value)} id="filtroStatus" className='bg-white'>
                  <option value="">Filtrar por status</option>
                  <option value="Pendente">Pendente</option>
                  <option value="Em andamento">Em andamento</option>
                  <option value="Finalizada">Finalizada</option>
                </select>
            </nav>
            <div className='h-90 w-full' id='tarefas'>
              {tarefasExibidas.map((tarefa, index) => (
                <div key={index} style={{ marginTop: "10px" }} className='w-full h-12 bg-gray-300 flex justify-around items-center'>
                  <p className="font-medium">{tarefa.titulo}</p>

                  <select
                    value={tarefa.status}
                    onChange={(e) => alterarStatusTarefa(tarefa.titulo, e.target.value)}
                    className={`rounded px-1 border ${
                      tarefa.status === "Pendente" ? "text-amber-600" : 
                      tarefa.status === "Finalizada" ? "text-green-600" : "text-yellow-300"
                    }`}
                  >
                    <option className='text-amber-600' value="Pendente">Pendente</option>
                    <option className='text-yellow-300' value="Em andamento">Em andamento</option>
                    <option className='text-green-600' value="Finalizada">Finalizada</option>
                  </select>
                </div>
              ))}
            </div>
            <div>
              <button
                className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded hover:cursor-pointer' onClick={adicionar}>Adicionar Tarefa +
              </button>
            </div>

            {tarefas.length < 5 && <img className='h-10 animate-spin' src={pouco} />}
            {tarefas.length > 4 && tarefas.length < 10 && <img className='h-10' src={medio} />}
            {tarefas.length > 10 && <img className='h-10' src={alto} />}
          </div>
      </>
  )
}

export default App
