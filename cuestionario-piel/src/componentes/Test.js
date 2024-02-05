import { Button } from 'reactstrap'
import { PREGUNTAS } from '../datos/datos.js'

export default function Test ({ preguntaActual, next, previous, seleccionar, respuestas }) {
  const respuestasActuales = <div className='respuestas' key={crypto.randomUUID()} >{PREGUNTAS[preguntaActual].respuestas.map((r, i) => {
    const newId = crypto.randomUUID()
    const opcion = respuestas[preguntaActual] === i
      ? <div>
    <label for={newId}><input key={newId} defaultChecked type='radio' id={newId} onClick={() => seleccionar(i)} /> { r.texto }</label>
  </div>
      : <div>
    <label for={newId}><input key={newId} type='radio' id={newId} onClick={() => seleccionar(i)} /> { r.texto }</label>
  </div>
    return opcion
  })}</div>

  let mostrar

  if (preguntaActual === 0) {
    mostrar = <>{respuestasActuales}<Button onClick={next} >{'>'}</Button></>
  } else if (preguntaActual === PREGUNTAS.length - 1) {
    mostrar = <><Button onClick={previous} >{'<'}</Button>{respuestasActuales}</>
  } else {
    mostrar = <><Button onClick={previous} >{'<'}</Button>{respuestasActuales}<Button onClick={next} >{'>'}</Button></>
  }

  return (
    <div className="test">
      <h2>{ PREGUNTAS[preguntaActual].pregunta }</h2>
        { mostrar }
    </div>
  )
}
