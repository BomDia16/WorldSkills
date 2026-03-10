// Medicoes com tempo
const tempo1 = localStorage.getItem('tempo1')
const tempo2 = localStorage.getItem('tempo2')
const tempoTotal = document.getElementById('tempoTotal')

const totais = parseInt(tempo1) + parseInt(tempo2)

const minutos = totais / 60
const segundos = totais % 60

const tempoFormatado = minutos.toFixed(0).padStart(2, "0") + ":" + segundos.toFixed(0).padStart(2, "0");

tempoTotal.innerHTML = tempoFormatado

// Quantidade vezes
const quantidadeTempo1 = localStorage.getItem('quantidadeTempo1')
const quantidadeTempo2 = localStorage.getItem('quantidadeTempo2')
const quantidadeMeditacoes = document.getElementById('quantidadeMeditacoes')
const meditacaoMais = document.getElementById('meditacaoMais')

quantidadeMeditacoes.innerHTML = parseInt(quantidadeTempo1) + parseInt(quantidadeTempo2)

if (quantidadeTempo1 > quantidadeTempo2) {
    meditacaoMais.innerHTML = "FICAR SUSSA"
} else {
    meditacaoMais.innerHTML = "FOCAR NA TAREFA"
}