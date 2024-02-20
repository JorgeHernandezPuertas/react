import './App.css'
import { useState } from 'react'
import { POBLACION2 } from './datos/datos.js'
import Poblacion from './componentes/Poblacion.js'
import Supermercados from './componentes/Supermercados.js'

function App () {
  const [poblacion, setPoblacion] = useState(POBLACION2)

  // Mostrar población
  const mostrarPoblacion = <div className='tabla'>{poblacion.map((fila, y) => {
    const nuevaFila = <div key={crypto.randomUUID()} className='fila'>{fila.map((columna, x) => {
      const supermarket = poblacion[y][x].supermarket.abierto ? 'supermarket' : ''
      const nuevaCol = <button key={crypto.randomUUID()} className={`col ${supermarket}`} onClick={() => nuevoMarket(y, x)}>{columna.personas}</button>
      return nuevaCol
    })}</div>
    return nuevaFila
  })}</div>

  function nuevoMarket (y, x) {
    const aux = JSON.parse(JSON.stringify(poblacion))
    aux[y][x].supermarket = { abierto: true, posicion: { x, y }, clientes: 0 }
    setPoblacion(aux)
  }

  return (
    <div className="App">
      <h2>Población</h2>
      {mostrarPoblacion}
      <Poblacion poblacion={poblacion} />
      <Supermercados poblacion={poblacion} />
    </div>
  )
}

export default App
