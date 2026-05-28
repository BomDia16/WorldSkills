import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function Cep() {

    const {cep} = useParams()

    const [info, setInfo] = useState({})

    const getInfoData = async () => {
        const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`)
        const data = await response.json()
        setInfo(data)
    }

    useEffect(() => {
        getInfoData()
    }, [])

    return (
        <div>
            <h1>{cep}</h1>
            <h2>{info.logradouro}</h2>
            <h2>{info.localidade}</h2>
            <h2>{info.regiao}</h2>
        </div>
    )
}

export default Cep