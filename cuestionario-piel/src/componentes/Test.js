import { Button } from 'reactstrap'
import { PREGUNTAS } from '../datos/datos.js'

export default function Test ({ preguntaActual, next, previous, seleccionar }) {
  const nombreDiff = crypto.randomUUID()
  const respuestasActuales = PREGUNTAS[preguntaActual].respuestas.map((r, i) => {
    const newId = crypto.randomUUID()
    return (<div>
      <input type='radio' id={newId} name={ nombreDiff } onClick={() => seleccionar(i)} /> <label for={newId}>{ r.texto }</label>
    </div>)
  })

  return (
    <div className="test">
      <h2>{ PREGUNTAS[preguntaActual].pregunta }</h2>
      <Button onClick={previous} >{'<'}</Button>
      <div className='respuestas' >
        { respuestasActuales }
      </div>
      <Button onClick={next} >{'>'}</Button>
    </div>
  )
}
