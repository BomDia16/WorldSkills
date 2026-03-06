const audio = document.getElementById("audio")

audio.addEventListener("loadedmetadata", () => {
    console.log("Duração total (s):", audio.duration);
});