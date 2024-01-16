import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Reservas from './components/Reservas'
import Administracion from './components/Administracion'
import Usuario from './components/Usuario'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />}>
          <Route path='Reservas' element={<Reservas />} />
          <Route path='Administracion' element={<Administracion />} />
          <Route path='Usuario' element={<Usuario />} />
          <Route path='*' element={<h2>No hay nada aquí</h2>} />
        </Route>
      </Routes>
    </BrowserRouter>

  </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
