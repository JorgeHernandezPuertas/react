import React from 'react'
import { Modal, ModalHeader, ModalBody } from 'reactstrap'

function Ventana ({ modal, precio, toggle }) {
  return (
    <div>
      <Modal isOpen={ modal } toggle={ toggle }>
        <ModalHeader toggle={ toggle }>Resultado</ModalHeader>
        <ModalBody>
          El precio aproximado de tu vivienda es de { precio } €
        </ModalBody>
      </Modal>
    </div>
  )
}

export default Ventana
