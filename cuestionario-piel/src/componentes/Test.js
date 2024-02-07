import { Button } from 'reactstrap'
import { PREGUNTAS } from '../datos/datos.js'

export default function Test ({ preguntaActual, next, previous, cambiarPagina, seleccionar, respuestas, animacion }) {
  // Formateo las respuestas actuales
  const respuestasActuales = <div className={`respuestas ${animacion}`} key={crypto.randomUUID()} >{PREGUNTAS[preguntaActual].respuestas.map((r, i) => {
    const newId = crypto.randomUUID()
    const opcion = respuestas[preguntaActual] === i
      ? <div className='seleccionar'>
    <label for={newId}><input key={newId} defaultChecked type='radio' id={newId} onClick={() => seleccionar(i)} /> { r.texto }</label>
  </div>
      : <div>
    <label for={newId}><input key={newId} type='radio' id={newId} onClick={() => seleccionar(i)} /> { r.texto }</label>
  </div>
    return opcion
  })}</div>

  // Construyo lo que muestro dependiendo de la página en la que esté
  let botones

  if (preguntaActual === 0) {
    botones = <>
    {respuestas.map((e, i) => {
      const boton = i === preguntaActual ? <Button disabled color='primary' onClick={() => cambiarPagina(i)}>{i + 1}</Button> : <Button color='light' onClick={() => cambiarPagina(i)}>{i + 1}</Button>
      return boton
    })}
    <Button color='light' onClick={next} >{'>'}</Button>
    </>
  } else if (preguntaActual === PREGUNTAS.length - 1) {
    botones = <><Button color='light' onClick={previous} >{'<'}</Button>{respuestas.map((e, i) => {
      const boton = i === preguntaActual ? <Button disabled color='primary' onClick={() => cambiarPagina(i)}>{i + 1}</Button> : <Button color='light' onClick={() => cambiarPagina(i)}>{i + 1}</Button>
      return boton
    })}</>
  } else {
    botones = <><Button color='light' onClick={previous} >{'<'}</Button> {respuestas.map((e, i) => {
      const boton = i === preguntaActual ? <Button disabled color='primary' onClick={() => cambiarPagina(i)}>{i + 1}</Button> : <Button color='light' onClick={() => cambiarPagina(i)}>{i + 1}</Button>
      return boton
    })}<Button color='light' onClick={next} >{'>'}</Button></>
  }

  return (
    <div className="test">
      <h2>{`${preguntaActual + 1}. ${PREGUNTAS[preguntaActual].pregunta}`}</h2>
        { respuestasActuales }
        { botones }
    </div>
  )
}
