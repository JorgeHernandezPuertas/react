import React, { Component, useState } from "react";
import { Button, Input, Modal, ModalHeader, ModalBody, ModalFooter, FormGroup, Label, Col } from 'reactstrap';
import "bootstrap/dist/css/bootstrap.min.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // INSERTE AQUÍ EL ESTADO NECESARIO. AQUÍ SE GUARDARÁ TODA LA INFORMACIÓN
      // CADA TELÉFONO TIENE QUE SER ÚNICO
      listaUsuarios: [],
      isOpen: false,
      informacion: "",
    };
  }

  render() {
    return (
      <div className="App">
        <Button>Holi</Button>
      </div>
    );
  }
}
export default App;
