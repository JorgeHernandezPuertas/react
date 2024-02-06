import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { PREGUNTAS, TIPOS_PIEL } from './datos/datos.js'
import { Button } from 'reactstrap'
import { useEffect, useState } from 'react'
import Test from './componentes/Test.js'
import Resultados from './componentes/Resultados.js'

function App () {
  const [empezado, setEmpezado] = useState(false)
  const [pregunta, setPregunta] = useState(0)
  const [respuestas, setRespuestas] = useState(Array(PREGUNTAS.length).fill(-1))
  const [terminado, setTerminado] = useState(false)
  const [puntuacion, setPuntuacion] = useState()
  const [tipoPiel, setTipoPiel] = useState()

  // Controlo el valor de terminado cada vez que responda una pregunta
  useEffect(() => {
    const completo = respuestas.find(v => v === -1)
    if (!completo) {
      setTerminado(true)
      establecerResultados()
    }
  }, [respuestas])

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

  // Establezco los resultados a mostrar
  async function establecerResultados () {
    await calcularPuntuacion()
    await calcularTipoPiel()
  }

  function calcularPuntuacion () {
    let puntuacion = 0
    // Sumo el valor de las respuestas respondidas
    respuestas.map((r, i) => {
      puntuacion += PREGUNTAS[i].respuestas[r].valor
      return r
    })
    setPuntuacion(puntuacion)
  }

  function calcularTipoPiel () {
    const tipo = TIPOS_PIEL.find(t => t.puntosMax > puntuacion)
    setTipoPiel(tipo)
  }
  return (
    <div className="App">
      <h1>Descubre tu fototipo</h1>
      { !empezado && <Button className='btn-start' color='primary' onClick={ start } >Empezar test</Button> }
      { empezado && <Test preguntaActual={ pregunta } next={ next } previous={ previous } seleccionar={seleccionar} respuestas={respuestas} /> }
      { terminado && <Resultados establecerResultados={establecerResultados} tipoPiel={tipoPiel} puntuacion={puntuacion} />}

    </div>
  )
}

export default App
