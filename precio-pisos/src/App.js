import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { useState, useEffect } from 'react'
import { create, all } from 'mathjs'
import Formulario from './components/Formulario'
import Ventana from './components/Ventana.js'
import { PISOS, PRECIOS } from './datos/datos.js'

function App () {
  const [vector, setVector] = useState()
  const [math] = useState(create(all, {}))
  const [datosUsuario, setDatosUsuario] = useState([])
  const [precio, setPrecio] = useState()
  const [modal, setModal] = useState(false)

  // Calculo el vector de regresión multivariable
  useEffect(() => {
    // Convierto mis datos en matrices que pueda tratar
    const MATRIZ_PISOS = math.matrix(PISOS)
    const MATRIZ_PRECIOS = math.matrix(PRECIOS)

    // Aplico la fórmula de la normal para calcular el vector de regresión lineal
    const VECTOR = math.multiply(math.multiply(math.inv(math.multiply(math.transpose(MATRIZ_PISOS), MATRIZ_PISOS)), math.transpose(MATRIZ_PISOS)), MATRIZ_PRECIOS)
    // Me quedo solo con los datos de la matriz
    setVector(VECTOR._data)
  }, [math])

  useEffect(() => {
    if (vector) {
      let resultado = 0
      vector.map((valor, indice) => {
        resultado += valor * datosUsuario[indice]
        return valor
      })
      // Aproximo a las centésimas
      resultado = Math.floor(resultado * 100) / 100
      setPrecio(resultado)
    }
  }, [datosUsuario, vector])

  useEffect(() => {
    if (!isNaN(precio)) {
      setModal(true)
    }
  }, [precio])

  function establecerDatos (datos) {
    setDatosUsuario(datos)
    setModal(true)
  }

  function toggle () {
    setModal(!modal)
  }

  return (
    <div className="App">
      <Formulario establecerDatos={ establecerDatos } />
      { modal && <Ventana modal={ modal } precio={ precio } toggle={ toggle } /> }
    </div>
  )
}

export default App
