const viuTutorial = localStorage.getItem("viuTutorial")
document.addEventListener('DOMContentLoaded', function() {
    if (viuTutorial == 0) {
        window.location.href = '../tutoriais/tutorial1.html'
    }
})

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