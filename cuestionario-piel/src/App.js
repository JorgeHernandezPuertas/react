import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { PREGUNTAS, DIR_PHP } from './datos/datos.js'
import { Button } from 'reactstrap'
import { useEffect, useState } from 'react'
import Test from './componentes/Test.js'
import Resultados from './componentes/Resultados.js'
import axios from 'axios'

function App () {
  const [empezado, setEmpezado] = useState(false)
  const [pregunta, setPregunta] = useState(0)
  const [respuestas, setRespuestas] = useState(Array(PREGUNTAS.length).fill(-1))
  const [terminado, setTerminado] = useState(false)
  const [animacion, setAnimacion] = useState('')
  const [recuento, setRecuento] = useState()

  // Refresco el recuento al empezar esté actualizado a la hora de mostrar los datos (por si repite)
  useEffect(() => {
    establecerRecuento()
  }, [empezado])

  // Petición get para obtener el recuento hasta ahora
  async function establecerRecuento () {
    const respuesta = await axios({
      method: 'get',
      url: DIR_PHP
    })
    setRecuento(respuesta.data)
  }

  // Controlo el valor de terminado cada vez que responda una pregunta
  useEffect(() => {
    const completo = respuestas.find(v => v === -1)
    if (!completo) {
      setTerminado(true)
    }
  }, [respuestas])

  function start () {
    setEmpezado(!empezado)
  }

  function next () {
    setAnimacion('derecha')
    setPregunta(pregunta + 1)
  }

  function previous () {
    setAnimacion('izquierda')
    setPregunta(pregunta - 1)
  }

  function seleccionar (elemento) {
    const respuestasAux = JSON.parse(JSON.stringify(respuestas))
    respuestasAux[pregunta] = elemento
    setAnimacion('')
    setRespuestas(respuestasAux)
  }

  function resetear () {
    const reset = Array(PREGUNTAS.length).fill(-1)
    setTerminado(false)
    setPregunta(0)
    setRespuestas(reset)
  }

  function cambiarPagina (pagina) {
    setAnimacion('aparecer')
    setPregunta(pagina)
  }

  return (
    <div className="App">
      <h1>Descubre tu fototipo</h1>
      { !empezado && <Button className='btn-start' color='primary' onClick={ start } >Empezar test</Button> }
      { empezado && <Test cambiarPagina={ cambiarPagina } preguntaActual={ pregunta } next={ next } previous={ previous } seleccionar={ seleccionar } respuestas={ respuestas } animacion={ animacion } /> }
      { terminado && <Resultados respuestas={ respuestas } resetear={ resetear } terminado={ terminado } recuento={ recuento } /> }

    </div>
  )
}

export default App
