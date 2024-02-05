import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'

import { TIPOS_PIEL, PREGUNTAS, VALORES } from './datos/datos.js'
import { Button } from 'reactstrap'
import { useState } from 'react'
import Test from './componentes/Test.js'

function App () {
  console.log(TIPOS_PIEL)
  console.log(PREGUNTAS)
  console.log(VALORES)

  const [empezado, setEmpezado] = useState(false)
  const [pregunta, setPregunta] = useState(0)
  const [respuestas, setRespuestas] = useState(Array(PREGUNTAS.length))

  function start () {
    setEmpezado(!empezado)
  }

  function next () {
    setPregunta(pregunta + 1)
  }

  function previous () {
    setPregunta(pregunta - 1)
  }

  function seleccionar (elemento) {
    const respuestasAux = JSON.parse(JSON.stringify(respuestas))
    respuestasAux[pregunta] = elemento
    console.log(respuestasAux)
    setRespuestas(respuestasAux)
  }

  return (
    <div className="App">
      <h1>Descubre tu fototipo</h1>
      { !empezado && <Button className='btn-start' color='primary' onClick={ start } >Empezar test</Button> }
      { empezado && <Test preguntaActual={ pregunta } next={ next } previous={ previous } seleccionar={seleccionar} /> }
    </div>
  )
}

export default App
