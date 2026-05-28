import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Viacep() {

    const navigate = useNavigate()

    function navigateCep() {
        const cep = document.getElementById('cep').value
        navigate(`/viacep/${cep}`)
    }

    return (
        <div>
            <h1>Viacep</h1>
            <input type="text" name="" placeholder='CEP' id="cep" />
            <button onClick={navigateCep}>ENVIAR</button>
        </div>
    )
}

export default Viacep