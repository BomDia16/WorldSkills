import React from 'react'
import TutorialCard from './components/TutorialCard'

function Tutorial() {
    return (
        <div className='flex items-center justify-between'>
            <TutorialCard message={"Olá"}></TutorialCard>
        </div>
    )
}

export default Tutorial