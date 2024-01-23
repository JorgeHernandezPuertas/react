import React, { useEffect, useState } from 'react'
import { Button } from 'reactstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

function Botonera ({ tablero }) {
  // COMPONENTE QUE RENDERIZA EL TABLERO
  // Parseo la matriz para hacer las filas
  const vistaTablero = tablero.map((fila, indexFila) => {
    const filaAux = fila.map((e) => {
    // Por cada fila miro si es par para ver donde dejo el boton en blanco
      if (indexFila % 2 === 0) {
      // Miro si es pieza verde o gris para ponerle el botón al color
        const boton = e === 'verde' ? <><Button outline /><Button color='secondary' /></> : <><Button outline /><Button color='success' /></>
        return boton
      } else {
        const boton = e === 'verde' ? <><Button color='secondary' /><Button outline /></> : <><Button color='success' /><Button outline /></>
        return boton
      }
    })
    return <>{filaAux}<br/></>
  })

  return (
  <div className='tablero'>
    {vistaTablero}
  </div>
  )
}

function App () {
  const [tablero, setTablero] = useState([])

  useEffect(() => {
    // ESTE HOOK SE EJECUTARÁ AL PRINCIPIO DE LA APLICACIÓN. ANTES DE RENDERIZAR.
    const tamanioAltura = 8
    const tamanioAncho = 4
    const tableroAux = []
    for (let i = 0; i < tamanioAltura; i++) {
      tableroAux.push([])
      for (let j = 0; j < tamanioAncho; j++) {
        if (i < 4) {
          tableroAux[i].push('verde')
        } else {
          tableroAux[i].push('gris')
        }
      }
    }

    setTablero(tableroAux)
  }, [])

  return (
  <div className="App">
    <header className="App-header">
      <Botonera tablero={tablero} />
    </header>
  </div>
  )
}
export default App
