import React, { useState } from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap'

export default function Resultados ({ isOpen, tipoPiel, puntuacion, establecerResultados }) {
  const [modal, setModal] = useState(isOpen)

  const toggle = () => setModal(!modal)

  return (
    <div>
      <Button className='btn-resultado' color='success' onClick={toggle} >Ver resultados</Button>
      <Modal isOpen={modal} toggle={toggle} centered >
        <ModalHeader toggle={toggle}>Resultado</ModalHeader>
        <ModalBody>
          <header>
            <h2>¡Has obtenido {puntuacion} puntos!</h2>
          </header>
          <main>
            <h3>{tipoPiel.texto}</h3>
            <h4>Características</h4>
            <p>{tipoPiel.info}</p>
          </main>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={toggle}>
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
