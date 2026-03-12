document.addEventListener("DOMContentLoaded", function() {
    if (parseInt(localStorage.getItem('viuTutorial')) != 0) {
        window.location.href = '../home/home.html'
    }
    console.log(parseInt(localStorage.getItem('viuTutorial')))
})

const terminarTutorial = document.getElementById('terminarTutorial')

terminarTutorial.addEventListener(('click'), function() {
    localStorage.setItem('viuTutorial', 1)
})