import { PREGUNTAS } from '../datos/datos.js'

export default function Test ({ preguntaActual, next, previous }) {
  const respuestasActuales = PREGUNTAS[preguntaActual].respuestas.map(r => {
    return (<div>
      <input type='radio' id='respuesta1' name={ `respuesta${preguntaActual + 1}` } /> <label for='respuesta1'>{ r.texto }</label>
    </div>)
  })

  return (
    <div className="test">
      <h2>{ PREGUNTAS[preguntaActual].pregunta }</h2>
      <div className='respuestas' >
        { respuestasActuales }
      </div>
    </div>
  )
}
