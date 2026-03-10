const terminarTutorial = document.getElementById('terminarTutorial')

terminarTutorial.addEventListener(('click'), function() {
    localStorage.setItem('viuTutorial', 1)
})