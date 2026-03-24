import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import Tasks from './components/Tasks'

function App() {

  return (
    <>
        <div className='flex flex-row-reverse'>
          <div className="flex flex-col items-center" style={{width: "100%"}}>
            <Navbar name="text-red-500"></Navbar>
            <Tasks></Tasks>
          </div>
          <Sidebar></Sidebar>
        </div>
    </>
  )
}

export default App
