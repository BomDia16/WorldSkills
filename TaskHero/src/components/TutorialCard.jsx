import React from 'react'

function TutorialCard({message}) {
    return (
        <div className='flex justify-center w-100 h-100 items-center'>
            <p className='w-60'>{message}</p>
        </div>
    )
}

export default TutorialCard