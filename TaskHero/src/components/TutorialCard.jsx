import React from 'react'

function TutorialCard({message, imagem}) {
    return (
        <div className='flex justify-center w-100 flex-col h-100 items-center'>
            <img className='h-37.5' src={imagem} alt="" />
            <p className='w-60'>{message}</p>
        </div>
    )
}

export default TutorialCard