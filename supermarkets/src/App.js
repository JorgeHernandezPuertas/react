import './App.css'
import { useState } from 'react'
import { POBLACION2 } from './datos/datos.js'
import Poblacion from './componentes/Poblacion.js'
import Supermercados from './componentes/Supermercados.js'

function App () {
  const [poblacion, setPoblacion] = useState(POBLACION2)
  // const [abierto, setAbierto] = useState(false)
  /*
  useEffect(() => {
    for (let i = 0; i < array.length; i++) {
      for (let j = 0; j < array.length; j++) {

      }
    }
  }, [poblacion])
*/
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
    if (aux[y][x].supermarket.abierto) {
      aux[y][x].supermarket.abierto = false
      aux[y][x].supermarket.posicion = { x: -1, y: -1 }
    } else {
      aux[y][x].supermarket.abierto = true
      aux[y][x].supermarket.posicion = { x, y }
    }

    // Una vez añadido o quitado el market, actualizo sus clientes
    marcarClientes(aux)

    setPoblacion(aux)
  }

  function marcarClientes (matriz) {
    // Reseteo los clientes que tuvieran los supers abiertos
    matriz.map(fila => {
      return fila.map(col => {
        col.supermarket.clientes = 0
        return col
      })
    })

    // Recorro toda la población
    matriz.forEach((fila, y) => {
      fila.forEach((col, x) => {
        repartirPoblacion(col, x, y, matriz)
      })
    })
  }

  function repartirPoblacion (casilla, iniX, iniY, matriz) {
    // Establezco los parámetros máximos de este punto concreto para no pasarme iterando
    const ALT_MAX = matriz.length - iniY > iniY ? matriz.length - iniY : iniY
    const LONG_MAX = matriz.length - iniX > iniX ? matriz.length - iniX : iniX
    const RANGO_MAX = ALT_MAX > LONG_MAX ? ALT_MAX : LONG_MAX

    // Recorro de forma circular la matriz con el punto inicial como centro
    // Establezco el rango y lo voy agrandando hasta que encuentre el/los supermercado
    let rango = 0
    let encontrado = false
    while (!encontrado && rango <= RANGO_MAX) {
      const supersCercanos = []
      for (let i = iniY - rango; i < iniY + rango + 1; i++) {
        for (let j = iniX - rango; j < iniX + rango + 1; j++) {
          // Controlo que esté dentro de la matriz que he pasado
          if (i >= 0 && j >= 0 && i < matriz.length && j < matriz[i].length) {
            // Si en esa posición hay un supermercado abierto, lo añado a los supermercados
            if (matriz[i][j].supermarket.abierto) {
              supersCercanos.push(matriz[i][j].supermarket)
              // Rompo el bucle porque solo me interan los de la distancia mínima
              encontrado = true
            }
          }
        }
      }
      // Si he encontrado algún super cercano, reparto la población de la casilla entre ellos
      if (supersCercanos.length > 0) {
        supersCercanos.forEach(market => {
          market.clientes += casilla.personas / supersCercanos.length
          // Actualizo en la matriz
          matriz[market.posicion.y][market.posicion.x].supermarket = market
        })
      }
      rango++
    }
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
