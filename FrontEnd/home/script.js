const div_sussa = document.getElementById("div_ficar_sussa")
const div_focar = document.getElementById("div_focar_tarefa")
const div_dormir = document.getElementById("div_dormir")

const viuTutorial = localStorage.getItem('viuTutorial')

if (!localStorage.getItem('viuTutorial')) {
    localStorage.setItem('viuTutorial', 0)
}

if (viuTutorial == 0) {
    window.location.href = '../tutoriais/tutorial1.html'
}

const voltarTutorial = document.getElementById('voltarTutorial')
voltarTutorial.addEventListener('click', function() {
    localStorage.setItem('viuTutorial', 0)
    window.location.href = "../tutoriais/tutorial1.html"
})

const tempo1 = localStorage.getItem('tempo1')
console.log(tempo1)
const quantidadeTempo1 = localStorage.getItem('quantidadeTempo1')
console.log(quantidadeTempo1)
const tempo2 = localStorage.getItem('tempo2')
console.log(tempo2)
const quantidadeTempo2 = localStorage.getItem('quantidadeTempo2')
console.log(quantidadeTempo2)
const tempo3 = localStorage.getItem('tempo3')
console.log(tempo3)
const quantidadeTempo3 = localStorage.getItem('quantidadeTempo3')
console.log(quantidadeTempo3)

div_sussa.addEventListener("click", function() {
    window.location.href = "../players/sussa.html"
})

div_focar.addEventListener("click", function() {
    window.location.href = "../players/focar.html"
})

div_dormir.addEventListener("click", function() {
    window.location.href = "../players/dormir.html"
})