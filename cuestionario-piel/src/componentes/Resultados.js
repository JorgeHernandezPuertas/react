import React, { useState } from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap'
import { TIPOS_PIEL, PREGUNTAS } from '../datos/datos'
// import axios from 'axios'

export default function Resultados ({ respuestas, resetear, terminado }) {
  const [modal, setModal] = useState(false)
  // const [estadistica, setEstadistica] = useState()

  const toggle = () => setModal(!modal)

  // Calculo la puntuación solo si ha terminado
  let puntuacion = 0
  const tipoPiel = TIPOS_PIEL.find(t => t.puntosMax > puntuacion)
  if (terminado) {
    respuestas.map((r, i) => {
      puntuacion += PREGUNTAS[i].respuestas[r].valor
      return r
    })
  }
  /*
  async function enviarResultado () {
    const estadisticaNueva = await axios({
      method: 'post',
      url: DIR_PHP,
      data: {
        tipo: tipoPiel.tipo
      }
    })
    setEstadistica(estadisticaNueva)
    console.log(estadisticaNueva)
  }
*/
  return (
    <div>
      <Button className='btn-resultado' color='success' onClick={ () => { /* enviarResultado(); */ toggle() } } >Ver resultados</Button>
      { modal && <Modal className='modal' isOpen={ modal } toggle={ toggle } centered unmountOnClose >
        <ModalHeader toggle={ toggle }><h2>Resultados</h2></ModalHeader>
        <ModalBody>
          <header>
            <h4>¡Has obtenido { puntuacion } puntos!</h4>
          </header>
          <main>
            <p>{ tipoPiel.texto }</p>
            <h4>Características</h4>
            <p>{ tipoPiel.info }</p>
            <p>
              {/* `Tipo 1: ${estadistica.data.tipo1} | Tipo 2: ${estadistica.data.tipo2} | Tipo 3: ${estadistica.data.tipo3} | Tipo 4: ${estadistica.data.tipo4}` */ }
            </p>
          </main>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={ () => { resetear(); toggle() } }>
            Repetir
          </Button>{ ' ' }
          <Button color="secondary" onClick={ toggle }>
            Volver
          </Button>
        </ModalFooter>
      </Modal> }
    </div>
  )
}
