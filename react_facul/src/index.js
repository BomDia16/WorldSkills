import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Aula1 from './pages/Aula1';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Aula2 from './pages/Aula2';
import AtividadeSomativa1 from './pages/Atividade_Somativa1';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/aula1' element={ <Aula1/> }/>
        <Route path='/calculadora' element={ <App/> }/>
        <Route path='/aula2' element={ <Aula2/> }/>
        <Route path='/atividade_somativa' element={ <AtividadeSomativa1/> }/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
