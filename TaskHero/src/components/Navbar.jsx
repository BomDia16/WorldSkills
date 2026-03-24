import React from 'react'
import { useNavigate } from 'react-router-dom'

function Navbar({name}) {

    const navigate = useNavigate()

    function statistics() {
        navigate('/statistics')
    }

    function home() {
        navigate('/')
    }

    function tutorial() {
        navigate('/tutorial')
    }

    return (
        <div className='w-full h-20 bg-blue-500 flex flex-row justify-between items-center'>
            <a onClick={home} className='ml-4'>TaskHero</a>
            <div className='w-44 flex justify-around'>
                <a onClick={tutorial}>config</a>
                <a>conta</a>
                <a onClick={statistics} className={`${name}`}>Estatísticas</a>
            </div>
        </div>
    )
}

export default Navbar