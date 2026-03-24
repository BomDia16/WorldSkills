import React from 'react'
import Navbar from './components/Navbar'
import Tasks from './components/Tasks'
import StatisticsCard from './components/StatisticsCard'

function Statistics() {
    return (
        <div className='flex flex-row-reverse'>
          <div className="flex flex-col items-center" style={{width: "100%"}}>
            <Navbar name="text-red-500"></Navbar>
            <StatisticsCard></StatisticsCard>
          </div>
        </div>
    )
}

export default Statistics