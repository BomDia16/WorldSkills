import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Navbar from './components/Navbar'

function Diaria() {

    const tarefas = [
        "Beber pelo menos 2 litros de água",
        "Fazer 15 minutos de alongamento",
        "Organizar seu espaço de trabalho",
        "Ler 10 páginas de um livro",
        "Meditar por 5 minutos",
        "Evitar redes sociais por 1 hora",
        "Fazer uma caminhada de 10 minutos",
        "Revisar suas metas do dia",
        "Estudar por 30 minutos",
        "Anotar 3 coisas positivas do dia",
        "Dormir antes das 23h",
        "Evitar açúcar durante o dia",
        "Beber um copo de água ao acordar",
        "Fazer uma pausa consciente de 5 minutos",
        "Planejar o dia seguinte"
    ];

    const [diaria, setDiaria] = useState(null);
    const [mostrarDiaria, setMostrarDiaria] = useState(true);

    function getToday() {
        return new Date().toISOString().split("T")[0];
    }

    function getDailyTask(tasks) {
        const today = getToday();
        let saved = JSON.parse(localStorage.getItem("dailyTask"));

        if (!saved || saved.date !== today) {
            const randomTask = tasks[Math.floor(Math.random() * tasks.length)];

            saved = {
                date: today,
                task: randomTask,
                completed: false
            };

            localStorage.setItem("dailyTask", JSON.stringify(saved));
        }

        return saved;
    }

    function terminarDiaria() {
        setMostrarDiaria(false);

        let saved = JSON.parse(localStorage.getItem("dailyTask"));

        if (saved) {
            saved.completed = true;
            localStorage.setItem("dailyTask", JSON.stringify(saved));
        }

        let tarefas_concluidas = parseInt(localStorage.getItem("tasks_done") || 0);
        let pontos = parseInt(localStorage.getItem('pontos') || 0);

        localStorage.setItem("tasks_done", tarefas_concluidas + 1);
        localStorage.setItem("pontos", pontos + 3);
    }

    useEffect(() => {
        const task = getDailyTask(tarefas);
        setDiaria(task);

        if (task?.completed) {
            setMostrarDiaria(false);
        }
    }, []);

    const [tempoRestante, setTempoRestante] = useState("")

    useEffect(() => {
        const atualizarTempo = () => {
            const agora = new Date()

            const meiaNoite = new Date()
            meiaNoite.setHours(24, 0, 0, 0) // próxima meia-noite

            const diferenca = meiaNoite - agora

            const horas = Math.floor(diferenca / (1000 * 60 * 60))
            const minutos = Math.floor((diferenca / (1000 * 60)) % 60)
            const segundos = Math.floor((diferenca / 1000) % 60)

            const formatado = `${String(horas).padStart(2, "0")}:${String(minutos).padStart(2, "0")}:${String(segundos).padStart(2, "0")}`

            setTempoRestante(formatado)
        }

        atualizarTempo()
        const interval = setInterval(atualizarTempo, 1000)

        return () => clearInterval(interval)
    }, [])

    return (
        <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.4 }}
        >
            <div className='flex flex-col'>
                <Navbar name="text-red-500" />

                <div className='flex items-center justify-center' style={{paddingTop: "100px"}}>
                    {mostrarDiaria && diaria && !diaria.completed ? (
                        <div>
                            <p>{diaria.task}</p>
                            <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded' style={{marginLeft: "20px"}} onClick={terminarDiaria}>Concluir</button>
                        </div>
                    ) : <p>Tarefa diária realizada, volte daqui a {tempoRestante} para a próxima!</p>}
                </div>         
            </div>
        </motion.div>
    )
}

export default Diaria;