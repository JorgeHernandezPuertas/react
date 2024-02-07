import React, { useState } from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap'
import { TIPOS_PIEL, PREGUNTAS } from '../datos/datos'

export default function Resultados ({ respuestas, resetear, terminado }) {
  const [modal, setModal] = useState(false)

  const toggle = () => setModal(!modal)

  // Calculo la puntuación solo si ha terminado
  let puntuacion = 0
  if (terminado) {
    respuestas.map((r, i) => {
      puntuacion += PREGUNTAS[i].respuestas[r].valor
      return r
    })
  }
  const tipoPiel = TIPOS_PIEL.find(t => t.puntosMax > puntuacion)

  return (
    <div>
      <Button className='btn-resultado' color='success' onClick={toggle} >Ver resultados</Button>
      <Modal className='modal' isOpen={modal} toggle={toggle} centered unmountOnClose >
        <ModalHeader toggle={toggle}><h2>Resultados</h2></ModalHeader>
        <ModalBody>
          <header>
            <h4>¡Has obtenido {puntuacion} puntos!</h4>
          </header>
          <main>
            <p>{tipoPiel.texto}</p>
            <h4>Características</h4>
            <p>{tipoPiel.info}</p>
          </main>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={() => { resetear(); toggle() }}>
            Repetir
          </Button>{' '}
          <Button color="secondary" onClick={toggle}>
            Volver
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  )
}
