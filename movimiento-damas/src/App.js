import React, { useEffect, useState } from 'react'
import { Button } from 'reactstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

function Botonera ({ tablero, seleccionado, handleClickSeleccion }) {
  // COMPONENTE QUE RENDERIZA EL TABLERO
  // Parseo la matriz para hacer las filas
  const vistaTablero = tablero.map((fila, indexFila) => {
    const filaAux = fila.map((e, indexCol) => {
    // Por cada fila miro si es par para ver donde dejo el boton en blanco
      if (indexFila % 2 === 0) {
        if (seleccionado && seleccionado.posX === indexCol && seleccionado.posY === indexFila) {
          return e === 'verde'
            ? <><Button outline /><Button color='secondary' onClick={() => handleClickSeleccion(indexCol, indexFila)} /></>
            : <><Button outline /><Button color='success' onClick={() => handleClickSeleccion(indexCol, indexFila)} /></>
        } else {
          // Miro si es pieza verde o gris para ponerle el botón al color
          return e === 'verde' ? <><Button outline /><Button color='secondary' onClick={() => handleClickSeleccion(indexCol, indexFila)} /></> : <><Button outline /><Button color='success' onClick={() => handleClickSeleccion(indexCol, indexFila)} /></>
        }
      } else {
        if (seleccionado && seleccionado.posX === indexCol && seleccionado.posY === indexFila) {
          return e === 'verde'
            ? <><Button color='secondary' onClick={() => handleClickSeleccion(indexCol, indexFila)} /><Button outline /></>
            : <><Button color='success' onClick={() => handleClickSeleccion(indexCol, indexFila)} /><Button outline /></>
        } else {
          return e === 'verde' ? <><Button color='secondary' /><Button outline /></> : <><Button color='success' /><Button outline /></>
        }
      }
    })
    // Devuelvo la fila nueva con el salto de linea al nuevo tablero
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
  const [seleccionado, setSeleccionado] = useState(null)

  // useEffect para crear el tablero al iniciar el programa
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

  function handleClickSeleccion (posX, posY) {
    if (seleccionado === null) {
      setSeleccionado({ posX, posY })
    } else {
      setSeleccionado(null)
      mover(posX, posY)
    }
  }

  function mover (posX, posY) {
    // Si hay alguno seleccionado
    if (seleccionado) {
      // Me copio el tablero para modificarlo luego
      const tableroAux = JSON.parse(JSON.stringify(tablero))
      // En función de cual esté seleccionado
      switch (tablero[seleccionado.posY][seleccionado.posX]) {
        case 'verde':
          // Como es verde compruebo si se mueve uno hacia arriba y en diagonal
          if (seleccionado.posY - posY === 1 && (seleccionado.posX - posX === 1 || seleccionado.posX - posX === -1)) {
            // Cambio al color que le toca
            tableroAux[posY][posX] = 'verde'
          }
          break
        case 'gris':
          // Como es verde compruebo si se mueve uno hacia abajo y en diagonal
          if (seleccionado.posY - posY === -1 && (seleccionado.posX - posX === 1 || seleccionado.posX - posX === -1)) {
            // Cambio al color que le toca
            tableroAux[posY][posX] = 'gris'
          }
          break
        default:
          break
      }
      setTablero(tableroAux)
    }
  }

  return (
  <div className="App">
    <header className="App-header">
      <Botonera tablero={tablero} seleccionado={seleccionado} handleClickSeleccion={handleClickSeleccion} />
    </header>
  </div>
  )
}
export default App
