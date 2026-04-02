import React from 'react'

function TutorialCard({titulo, mensagem, imagem}) {

    return (
        <>
            <nav className='h-15 w-full bg-blue-300 flex items-center justify-center'>
                <h1>Tutorial</h1>
            </nav>

            <p>{titulo}</p>
            <img className='h-30' src={imagem} alt="" />

            <p>{mensagem}</p>
            </>
    )
}

export default TutorialCard