import React from 'react'
import tutorial2 from '../../assets/Midias/Bob/tutorial2.png'

function Tutorial2() {
  return (
    <div class="container">
        <p>É divertido e ajudamos você a ficar motivado com recompensas pelo seu empenho em ficar "De Boas"</p>
        <img src={tutorial2} alt="" />
        <a href="/tutorial3"><button class="avancar">Próximo</button></a>
    </div>
  )
}

export default Tutorial2