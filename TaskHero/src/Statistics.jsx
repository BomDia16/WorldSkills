import React, { useEffect } from 'react'
import Navbar from './components/Navbar'
import Tasks from './components/Tasks'
import StatisticsCard from './components/StatisticsCard'
import { useNavigate } from 'react-router-dom'

function Statistics() {

  const navigate = useNavigate()

  useEffect(() => {
    let viuTutorial = parseInt(localStorage.getItem('viuTutorial') || 0)
  
    if (viuTutorial == 0) {
      navigate('/tutorial')
    }
  }, [])

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