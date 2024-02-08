import { Button } from 'reactstrap'
import { PREGUNTAS } from '../datos/datos.js'
import { Fragment } from 'react'

export default function Test ({ preguntaActual, next, previous, cambiarPagina, seleccionar, respuestas, animacion }) {
  // Formateo las respuestas actuales
  const respuestasActuales =
    <div className={ `respuestas ${animacion}` } key={ crypto.randomUUID() } >
      {
        PREGUNTAS[preguntaActual].respuestas.map((r, i) => {
          const newId = crypto.randomUUID()
          const opcion = respuestas[preguntaActual] === i
            ? <div className='seleccionar'>
              <label key={ crypto.randomUUID() } htmlFor={ newId }>
                <input defaultChecked type='radio' id={ newId } onClick={ () => seleccionar(i) } />
                { r.texto }
              </label>
            </div>
            : <div>
              <label key={ crypto.randomUUID() } htmlFor={ newId }>
                <input type='radio' id={ newId } onClick={ () => seleccionar(i) } />
                { r.texto }
              </label>
            </div>
          return opcion
        })
      }
    </div>

  // Construyo lo que muestro dependiendo de la página en la que esté
  let botones

  if (preguntaActual === 0) {
    botones = <Fragment key={ crypto.randomUUID() }>
      <Button key={ crypto.randomUUID() } color='light' onClick={ next } style={ { visibility: 'hidden' } } >{ '<' }</Button>
      {
        respuestas.map((e, i) => {
          const boton = i === preguntaActual
            ? <Button key={ crypto.randomUUID() } disabled color='primary' onClick={ () => cambiarPagina(i) }>{ i + 1 }</Button>
            : <Button key={ crypto.randomUUID() } color='light' onClick={ () => cambiarPagina(i) }>{ i + 1 }</Button>
          return boton
        })
      }
      <Button key={ crypto.randomUUID() } color='light' onClick={ next } >{ '>' }</Button>
    </Fragment>
  } else if (preguntaActual === PREGUNTAS.length - 1) {
    botones = <Fragment key={ crypto.randomUUID() }>
      <Button key={ crypto.randomUUID() } color='light' onClick={ previous } >{ '<' }</Button>
      {
        respuestas.map((e, i) => {
          const boton = i === preguntaActual
            ? <Button key={ crypto.randomUUID() } disabled color='primary' onClick={ () => cambiarPagina(i) }>{ i + 1 }</Button>
            : <Button key={ crypto.randomUUID() } color='light' onClick={ () => cambiarPagina(i) }>{ i + 1 }</Button>
          return boton
        })
      }
      <Button key={ crypto.randomUUID() } color='light' onClick={ next } style={ { visibility: 'hidden' } } >{ '>' }</Button>
    </Fragment>
  } else {
    botones = <Fragment key={ crypto.randomUUID() }>
      <Button color='light' onClick={ previous } >{ '<' }</Button>
      {
        respuestas.map((e, i) => {
          const boton = i === preguntaActual
            ? <Button key={ crypto.randomUUID() } disabled color='primary' onClick={ () => cambiarPagina(i) }>{ i + 1 }</Button>
            : <Button key={ crypto.randomUUID() } color='light' onClick={ () => cambiarPagina(i) }>{ i + 1 }</Button>
          return boton
        }) }<Button key={ crypto.randomUUID() } color='light' onClick={ next } >{ '>' }</Button>
    </Fragment>
  }

  return (
    <div className="test">
      <h2>{ `${preguntaActual + 1}. ${PREGUNTAS[preguntaActual].pregunta}` }</h2>
      { respuestasActuales }
      { botones }
    </div>
  )
}
