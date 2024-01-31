import React, { useEffect, useState } from 'react'
import { Button, Form, FormGroup, Label, Input } from 'reactstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

const Altas = ({ listin, insertarListin }) => {
  // UTILICE HOOKS EN ESTE COMPONENTE
  const [nuevaAlta, setNuevaAlta] = useState(null)

  useEffect(() => {
    if (nuevaAlta !== null) {
      const seRepite = listin.find((u) => u.nombre === nuevaAlta.nombre || u.telefono === nuevaAlta.telefono)
      if (!seRepite) {
        insertarListin(nuevaAlta)
      }
    }
  }, [nuevaAlta])

  function handleSubmit (event) {
    event.preventDefault()

    const nuevoUsuario = {
      nombre: event.target.nombre.value,
      apellido: event.target.apellidos.value,
      telefono: event.target.telefono.value
    }

    setNuevaAlta(nuevoUsuario)
  }

  return (
    <Form onSubmit={handleSubmit}>
      <FormGroup>
        <Label for="Nombre">Nombre:</Label>
        <Input name="nombre" id="nombre" placeholder="introduzca

      nombre"/>

        <Label for="Nombre">Apellidos:</Label>
        <Input name="apellidos" id="apellidos"

          placeholder="introduzca apellidos" />

        <Label for="Nombre">Telefono:</Label>
        <Input name="telefono" id="telefono" placeholder="introduzca

      telefono" />
      </FormGroup>
      <Button>Añadir</Button>
    </Form>
  )
}

const Mostrar = ({ listin, handleBorrar }) => {
  const listinMapeado = listin.map((u) => <li>{u.nombre} {u.apellido} {u.telefono} <Button onClick={() => handleBorrar(u)} >X</Button></li>)
  // ESTE COMPONENTE MUESTRA EL LISTÍN TELEFÓNICO.
  return (
    <ul>
      {listinMapeado}
    </ul>
  )
}

class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      listin: []
    }
  }

  handleBorrar (userBorrar) {
    let listinAux = JSON.parse(JSON.stringify(this.state.listin))
    listinAux = listinAux.filter((u) => u.nombre !== userBorrar.nombre)
    this.setState({ listin: listinAux })
  }

  insertarListin (usuario) {
    const listinAux = JSON.parse(JSON.stringify(this.state.listin))
    listinAux.push(usuario)
    this.setState({ listin: listinAux })
  }

  render () {
    return (
      <div className="App">
        {/* DEBERÁ RENDERIZAR AL MENOS LOS DOS COMPONENTES ANTERIORES */}
        <Mostrar listin={this.state.listin} handleBorrar={(u) => this.handleBorrar(u)} />
        <Altas listin={this.state.listin} insertarListin={(u) => this.insertarListin(u)} />
      </div>
    )
  }
}
export default App
