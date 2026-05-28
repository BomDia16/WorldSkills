import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Viacep from './pages/Viacep.jsx'
import Cep from './pages/Cep.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<App/>}></Route>
      <Route path='/viacep' element={<Viacep/>}></Route>
      <Route path='/viacep/:cep' element={<Cep/>}></Route>
    </Routes>
  </BrowserRouter>
)
