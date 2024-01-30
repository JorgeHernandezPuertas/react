import React, { useEffect, useState } from 'react'
import { Button } from 'reactstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

function Botonera ({ tablero, seleccionado, handleClickSeleccion }) {
  // COMPONENTE QUE RENDERIZA EL TABLERO
  // Parseo la matriz para hacer las filas
  const vistaTablero = tablero.map((fila, indexFila) => {
    const filaAux = fila.map((col, indexCol) => {
      let boton
      switch (col) {
        case 'verde':
          boton = (seleccionado && seleccionado.posY === indexFila && seleccionado.posX === indexCol) ? <Button color='success' active /> : <Button color='success' onClick={handleClickSeleccion} />
          return boton
        case 'gris':
          boton = (seleccionado && seleccionado.posY === indexFila && seleccionado.posX === indexCol) ? <Button color='secondary' active /> : <Button color='secondary' />
          return boton
        default:
          return <Button outline />
      }
    })
    filaAux.push(<br/>)
    return filaAux
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
    const tamanioAncho = 8
    const tableroAux = []
    let color = ''
    for (let i = 0; i < tamanioAltura; i++) {
      tableroAux.push([])
      for (let j = 0; j < tamanioAncho; j++) {
        // Elijo el color del jugador en esta parte del tablero
        if (i < 3) {
          color = 'gris'
        } else if (i > 4) {
          color = 'verde'
        } else {
          color = 'blanco'
        }
        // Dejo la separación entre cada ficha de color
        if (i % 2 === 0 && j % 2 === 0) {
          color = 'blanco'
        } else if (i % 2 !== 0 && j % 2 !== 0) {
          color = 'blanco'
        }
        // Pongo el color que irá en esa posición
        tableroAux[i].push(color)
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
    if (seleccionado !== null) {
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
