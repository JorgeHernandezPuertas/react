import './App.css'
import { useState } from 'react'
import { POBLACION2 } from './datos/datos.js'

function App () {
  const [poblacion, setPoblacion] = useState(POBLACION2)

  // Mostrar población
  const mostrarPoblacion = <div className='tabla'>{poblacion.map((fila, y) => {
    const nuevaFila = <div key={crypto.randomUUID()} className='fila'>{fila.map((columna, x) => {
      const supermarket = poblacion[y][x].supermarket.abierto ? 'supermarket' : ''
      const nuevaCol = <button key={crypto.randomUUID()} className={`${supermarket} col`} onClick={nuevoMarket}>{columna.personas}</button>
      return nuevaCol
    })}</div>
    return nuevaFila
  })}</div>

  function nuevoMarket () {
    const aux = JSON.parse(JSON.stringify(poblacion))
    aux[2][2].supermarket = { abierto: true, nombre: 'carrefour', clientes: 0 }
    setPoblacion(aux)
  }

  return (
    <div className="App">
      <h2>Población</h2>
      {mostrarPoblacion}
      <button onClick={nuevoMarket}>Añadir</button>
    </div>
  )
}

export default App
