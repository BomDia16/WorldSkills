const div_sussa = document.getElementById("div_ficar_sussa")
const div_focar = document.getElementById("div_focar_tarefa")

const tempo1 = localStorage.getItem('tempo1')
console.log(tempo1)
const quantidadeTempo1 = localStorage.getItem('quantidadeTempo1')
console.log(quantidadeTempo1)
const tempo2 = localStorage.getItem('tempo2')
console.log(tempo2)
const quantidadeTempo2 = localStorage.getItem('quantidadeTempo2')
console.log(quantidadeTempo2)

div_sussa.addEventListener("click", function() {
    window.location.href = "../players/sussa.html"
})

div_focar.addEventListener("click", function() {
    window.location.href = "../players/focar.html"
})