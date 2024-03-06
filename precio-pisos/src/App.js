import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { useState, useEffect } from 'react'
import { create, all } from 'mathjs'
import Formulario from './components/Formulario'
import { PISOS, PRECIOS } from './datos/datos.js'

function App () {
  const [vector, setVector] = useState()
  const [math] = useState(create(all, {}))
  const [datosUsuario, setDatosUsuario] = useState([])
  const [precio, setPrecio] = useState()

  console.log(vector, datosUsuario, precio)

  // Calculo el vector de regresión multivariable
  useEffect(() => {
    // Convierto mis datos en matrices que pueda tratar
    const MATRIZ_PISOS = math.matrix(PISOS)
    const MATRIZ_PRECIOS = math.matrix(PRECIOS)

    // Aplico la fórmula de la normal para calcular el vector de regresión lineal
    const VECTOR = math.multiply(math.multiply(math.inv(math.multiply(math.transpose(MATRIZ_PISOS), MATRIZ_PISOS)), math.transpose(MATRIZ_PISOS)), MATRIZ_PRECIOS)
    console.log('Vector final:')
    console.log(VECTOR)
    setVector(VECTOR)
  }, [math])

  useEffect(() => {
    if (vector) {
      let resultado = 0
      vector.map((valor, indice) => {
        resultado += valor * datosUsuario[indice]
        return valor
      })
      setPrecio(resultado)
    }
  }, [datosUsuario, vector])

  function establecerDatos (datos) {
    setDatosUsuario(datos)
  }

  return (
    <div className="App">
      <Formulario establecerDatos={establecerDatos} />
      {
        precio &&
        <div>
          <h4>Precio</h4>
          <p>El precio de tu piso es {precio}</p>
        </div>
      }
    </div>
  )
}

export default App
