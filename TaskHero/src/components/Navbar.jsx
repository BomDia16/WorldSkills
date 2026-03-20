import React from 'react'

function Navbar() {
    return (
        <div className='w-full h-20 bg-blue-500 flex flex-row justify-between items-center'>
            <p className='ml-4'>TaskHero</p>
            <div className='w-44 flex justify-around'>
                <p>config</p>
                <p>conta</p>
            </div>
        </div>
    )
}

export default Navbar