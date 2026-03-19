import React, { useEffect } from 'react'
import feliz from '../../assets/Midias/Bob/feliztransparente.png'
import './Statistics.css'
import { useNavigate } from 'react-router-dom'

function Statistics() {

    const viuTutorial = localStorage.getItem('viuTutorial') || 0

    document.addEventListener('DOMContentLoaded', function() {
        if (viuTutorial == 0) {
            voltar()
        }
    })

    const navigate = useNavigate()

    function voltar() {
        navigate('tutorial1')
    }

    useEffect(() => {

        // Medicoes com tempo
        let tempo1 = localStorage.getItem('tempo1')
        let tempo2 = localStorage.getItem('tempo2')
        let tempo3 = localStorage.getItem('tempo3')
        const tempoTotal = document.getElementById('tempoTotal')
    
        if (tempo1 == null) tempo1 = 0
        if (tempo2 == null) tempo2 = 0
        if (tempo3 == null) tempo3 = 0
    
        const totais = parseInt(tempo1) + parseInt(tempo2) + parseInt(tempo3)
    
        let minutos = totais / 60
        let segundos = totais % 60
    
        console.log(totais)
        console.log(segundos)
        console.log(tempo1)
    
        if (isNaN(minutos)) minutos = 0
        if (isNaN(segundos)) segundos = 0
    
        const tempoFormatado = minutos.toFixed(0).padStart(2, "0") + ":" + segundos.toFixed(0).padStart(2, "0");
    
        tempoTotal.innerHTML = tempoFormatado
    
        // Quantidade vezes
        let quantidadeTempo1 = localStorage.getItem('quantidadeTempo1')
        let quantidadeTempo2 = localStorage.getItem('quantidadeTempo2')
        let quantidadeTempo3 = localStorage.getItem('quantidadeTempo3')
        const quantidadeMeditacoes = document.getElementById('quantidadeMeditacoes')
        const meditacaoMais = document.getElementById('meditacaoMais')
    
        if (quantidadeTempo1 == null) quantidadeTempo1 = 0
    
        if (quantidadeTempo2 == null) quantidadeTempo2 = 0
    
        if (quantidadeTempo3 == null) quantidadeTempo3 = 0
    
        quantidadeMeditacoes.innerHTML = parseInt(quantidadeTempo1) + parseInt(quantidadeTempo2) + parseInt(quantidadeTempo3)
    
        if (parseInt(tempo1) > parseInt(tempo2) && parseInt(tempo1) > parseInt(tempo3)) {
            meditacaoMais.innerHTML = "FICAR SUSSA"
        } else if (parseInt(tempo2) > parseInt(tempo3)) {
            meditacaoMais.innerHTML = "FOCAR NA TAREFA"
        } else {
            meditacaoMais.innerHTML = "DORMIR DE BOAS"
        }
    }, [])


    return (
        <div class="container">
            <nav>
                <a href="/"><img class="avancar" src="https://cdn-icons-png.flaticon.com/128/2732/2732652.png" alt="back" /></a>
            </nav>
            <h3>MINHAS ESTATÍSTICAS</h3>
            <div style={{borderBottom: "1px solid black; height: 1px;"}}></div>
            
            <h3>MEDITAÇÕES REALIZADAS</h3>
            <p id="quantidadeMeditacoes"></p>

            <h3>TEMPO TOTAL MEDITANDO</h3>
            <p id="tempoTotal"></p>

            <h3>OBJETIVO MAIS UTILIZADO</h3>
            <p id="meditacaoMais"></p>

            <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"><img id="feliz" src={feliz} alt="" /></a>
        </div>
    )
}

export default Statistics