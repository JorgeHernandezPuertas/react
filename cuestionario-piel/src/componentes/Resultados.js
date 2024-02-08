import React, { useState } from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap'
import { TIPOS_PIEL, PREGUNTAS, DIR_PHP, IMAGENES } from '../datos/datos'
import axios from 'axios'
import Porcentajes from './Porcentajes'

export default function Resultados ({ respuestas, resetear, terminado, recuento }) {
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

  // Calculo el tipo de piel con el resultado actual
  const tipoPiel = TIPOS_PIEL.find(t => t.puntosMax > puntuacion)

  // Pongo el nuevo tipo de piel en el recuento para contar el test que se acaba de hacer (solo si ha abierto la modal de mostrar los resultados)
  if (modal) {
    for (const tipo in recuento) {
      if (tipo === `tipo${tipoPiel.tipo}`) {
        recuento[tipo] = Number(recuento[tipo]) + 1
        break
      }
    }
  }

  // Función para enviar el último resultado
  function enviarResultado () {
    axios({
      method: 'post',
      url: DIR_PHP,
      data: {
        tipo: tipoPiel.tipo
      }
    })
  }

  // Creo cómo mostrar las estadísticas

  // Calculo el total de recuento
  let totalRecuento = 0
  for (const tipo in recuento) {
    totalRecuento += Number(recuento[tipo])
  }

  // Lleno el array con los porcentajes para poder renderizarlo
  const estadisticasTipos = []
  for (const tipo in recuento) {
    // Calculo el porcentaje con dos decimales
    const porcentaje = parseInt((recuento[tipo] / totalRecuento) * 10000) / 100
    estadisticasTipos.push(porcentaje)
  }

  // Selecciono la foto a enseñar dependiendo de su tipo de piel
  const url = './images/' + IMAGENES[tipoPiel.tipo - 1]

  return (
    <div>
      <Button className='btn-resultado' color='success' onClick={ toggle } >Ver resultados</Button>
      { modal && <Modal className='modal' isOpen={ modal } centered fullscreen >
        <ModalHeader className='header'>Resultados</ModalHeader>
        <ModalBody>
          <header>
            <section>
              <h4>Puntuación</h4>
              <p>¡Has obtenido <strong>{ puntuacion }</strong> puntos!</p>
            </section>
            <section>
              <h4>Tipo</h4>
              <p>{ tipoPiel.texto }</p>
            </section>
            <section>
              <h4>Características</h4>
              <p>{ tipoPiel.info }</p>
            </section>
          </header>
          <main>
            <img src={ url } alt={ `Imagen de Fototipo ${tipoPiel.tipo}` } title={ `Ejemplo de Fototipo ${tipoPiel.tipo}` } />
          </main>
          <footer>
            {
              <Porcentajes estadisticasTipos={ estadisticasTipos } modal={ modal } />
            }
          </footer>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={ () => { enviarResultado(); resetear(); toggle() } }>
            Terminar
          </Button>{ ' ' }
        </ModalFooter>
      </Modal> }
    </div >
  )
}
