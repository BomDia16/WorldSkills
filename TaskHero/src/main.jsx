import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import Statistics from './Statistics.jsx'
import Tutorial from './Tutorial.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <App /> }></Route>
        <Route path="/statistics" element={ <Statistics /> }></Route>
        <Route path="/tutorial" element={ <Tutorial /> }></Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
