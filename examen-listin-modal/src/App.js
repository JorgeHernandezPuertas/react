import React, { Component, useState } from "react";
import { Button, Input, Modal, ModalHeader, ModalBody, ModalFooter, FormGroup, Label, Col } from 'reactstrap';
import "bootstrap/dist/css/bootstrap.min.css";

const VentanaModalDiccionario = (props) => {
  const {
    className, insertar
  } = props;
  const [nombre, setNombre] = useState('')
  const [telefono, setTelefono] = useState('')

  function handlechange (e) {
    // Si viene de nombre
    if (e.target.name === "nombre"){
        setNombre(e.target.value)
    } else if (e.target.name === "telefono") { // Si viene de telefono
        setTelefono(e.target.value)
    }
  }

  function resetValues() {
    setNombre('')
    setTelefono('')
  }

  return (
    <div>
      <Modal isOpen={props.mostrar} toggle={props.toggle} className={className} onEntering={() => { }}>
        <ModalHeader toggle={props.toggle}>{props.titulo}</ModalHeader>
        <ModalBody>

          <FormGroup row>
            <Label sm={2} > Nombre: </Label>
            <Col sm={10}>
              <Input 
                id="nombre"
                name="nombre"
                type="Text" 
                onChange={handlechange}
                />
            </Col>
          </FormGroup>

          <FormGroup row>
            <Label sm={2} > Teléfono: </Label>
            <Col sm={10}>
              <Input 
                id="telefono"
                name="telefono"
                type="Text" 
                onChange={handlechange}
                />
            </Col>
          </FormGroup>

        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={() => {props.toggle();insertar(nombre, telefono);resetValues()}}>{props.aceptar}</Button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        </ModalFooter>
      </Modal>
    </div>

  );
}

const Mostrar = ({ listaUsuarios, handleBorrar }) => {
  return (
    <>
        {listaUsuarios.length !== 0 ? <ul>{listaUsuarios.map(u => <li>{`${u.nombre} - ${u.telefono} `} <Button onClick={() => handleBorrar(u)} > X </Button></li>)}</ul> : <h5>No hay usuarios en la lista</h5>}
    </>
  );
};



class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // INSERTE AQUÍ EL ESTADO NECESARIO. AQUÍ SE GUARDARÁ TODA LA INFORMACIÓN
        listaUsuarios: [],
        isOpen: false,
    };
  }



  setIsOpen(d) {
    if (d == undefined) return;
    this.setState({ isOpen: d })
  }

  toggleModal() { this.setIsOpen(!this.state.isOpen); }

  insertarUsuario (nombre, telefono) {
    if (nombre === '' || telefono === '') return
    const listaAux = JSON.parse(JSON.stringify(this.state.listaUsuarios))
    if (listaAux.find(u => u.telefono === telefono) === undefined){
        listaAux.push({ nombre, telefono })
        this.setState({ listaUsuarios: listaAux })
    }
  }

  borrar(user) {
    const listaAux = JSON.parse(JSON.stringify(this.state.listaUsuarios)).filter(u => u.telefono !== user.telefono)
    this.setState({ listaUsuarios: listaAux })
  }


  render() {
    return (
      <div className="App">
        <h1>Listin teléfonico</h1>
        <Mostrar listaUsuarios={this.state.listaUsuarios} handleBorrar={(u) => this.borrar(u)} />
        <Button onClick={() => { this.toggleModal() }} color="info">Add</Button>
        <VentanaModalDiccionario
          mostrar={this.state.isOpen}
          aceptar={'Añadir'}
          toggle={() => this.toggleModal()}
          titulo={"Alta en el listín"}
          insertar={ (n, t) => this.insertarUsuario(n, t) }
        />
      </div>
    );
  }
}
export default App;
