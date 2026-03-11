const terminarTutorial = document.getElementById('terminarTutorial')

terminarTutorial.addEventListener(('click'), function() {
    localStorage.setItem('viuTutorial', 1)
})

if (parseInt(localStorage.getItem('viuTutorial')) != 0) {
    window.location.href = '../home/home.html'
}

console.log(localStorage.getItem('viuTutorial'))