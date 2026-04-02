import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import Tutorial from './Tutorial.jsx'
import Adicionar from './Adicionar.jsx'
import Statistics from './Statistics.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={ <App /> }></Route>
      <Route path="/tutorial" element={ <Tutorial /> }></Route>
      <Route path="/adicionar" element={ <Adicionar /> }></Route>
      <Route path="/statistics" element={ <Statistics /> }></Route>
    </Routes>
  </BrowserRouter>,
)
