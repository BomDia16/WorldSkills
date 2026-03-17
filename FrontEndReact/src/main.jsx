import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home/Home.jsx';
import React from 'react';
import Tutorial1 from './pages/tutoriais/Tutorial1.jsx';
import Tutorial2 from './pages/tutoriais/Tutorial2.jsx';
import Tutorial3 from './pages/tutoriais/Tutorial3.jsx';
import Sussa from './pages/players/Sussa.jsx';
import Focar from './pages/players/Focar.jsx';
import Dormir from './pages/players/Dormir.jsx';
import Statistics from './pages/statistics/Statistics.jsx';

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={ <Home /> } />
        <Route path='/tutorial1' element={ <Tutorial1 /> } />
        <Route path='/tutorial2' element={ <Tutorial2 /> } />
        <Route path='/tutorial3' element={ <Tutorial3 /> } />
        <Route path='/sussa' element={ <Sussa /> } />
        <Route path='/focar' element={ <Focar /> } />
        <Route path='/dormir' element={ <Dormir /> } />
        <Route path='/statistics' element={ <Statistics /> } />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
