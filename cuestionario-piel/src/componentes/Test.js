import { Button } from 'reactstrap'
import { PREGUNTAS } from '../datos/datos.js'

export default function Test ({ preguntaActual, next, previous, seleccionar, respuestas }) {
  // Formateo las respuestas actuales
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

  // Construyo lo que muestro dependiendo de la página en la que esté
  let mostrar

  if (preguntaActual === 0) {
    mostrar = <>{respuestasActuales}<Button color='light' onClick={next} >{'>'}</Button></>
  } else if (preguntaActual === PREGUNTAS.length - 1) {
    mostrar = <>{respuestasActuales}<Button color='light' onClick={previous} >{'<'}</Button></>
  } else {
    mostrar = <>{respuestasActuales}<Button color='light' onClick={previous} >{'<'}</Button> <Button color='light' onClick={next} >{'>'}</Button></>
  }

  return (
    <div className="test">
      <h2>{`${preguntaActual + 1}. ${PREGUNTAS[preguntaActual].pregunta}`}</h2>
        { mostrar }
    </div>
  )
}
