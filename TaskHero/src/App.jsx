import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'

function App() {

  return (
    <>
        <div className='flex flex-row-reverse'>
          <Navbar></Navbar>
          <Sidebar></Sidebar>
        </div>
    </>
  )
}

export default App
