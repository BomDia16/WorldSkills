const div_sussa = document.getElementById("div_ficar_sussa")

const tempo1 = localStorage.getItem('tempo1')
console.log(tempo1)

div_sussa.addEventListener("click", function() {
    window.location.href = "../players/sussa.html"
})