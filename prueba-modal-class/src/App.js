import React, { useState, Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  Alert, Row, Col, UncontrolledAccordion, AccordionItem, AccordionHeader, AccordionBody, Input, Button, Modal, ModalHeader, ModalBody, ModalFooter, FormGroup, Label
} from 'reactstrap';

const VentanaModalDiccionario = (props) => {
  const {
    className
  } = props;

  const [elegido, setElegido] = useState()

  const handleChange = (event) => { // Buscador de filtro
    // COMPLETA ESTA FUNCION
    let elegidoAux;
    // Recupero el select
    const select = document.getElementById('selectMulti')
    // Hago un array con todos sus hijos
    const elementos = Array.from(select.children)
    // Me quedo con los hijos en los que matcheen la busqueda y mapeo el array para quedarme con los valores
    const matchings = elementos.filter((e) => e.innerHTML.toLowerCase().includes(event.target.value)).map((e) => e.innerHTML)
    // Si tengo algun match pongo el primero como value
    if (matchings[0] !== undefined) {
      select.value = matchings[0]
      // Pongo la elegida por ahora donde tiene que ir
      elegidoAux = matchings[0]
    } else {
      elegidoAux = elementos[0].innerHTML
    }
    setElegido(elegidoAux)
  }

  return (
    <div>
      <Modal isOpen={props.mostrar} toggle={props.toggle} className={className} onEntering={"//ESTO SE EJECUTA CUANDO MUESTRAS LA VENTANA"}>
        <ModalHeader toggle={props.toggle}>{props.titulo}</ModalHeader>
        <ModalBody>
          <FormGroup row>
            <Label sm={2} > Filtrar: </Label>
            <Col sm={10}>
              <Input onChange={handleChange}
                id="filtro"
                name="filtro"
                type="Text" />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Col sm={12}>
              <Input onChange={handleChange} onClick={handleChange}
                id="selectMulti"
                name="selectMulti"
                type="select"
              >
                <option>CODIGO1|DESCRIPCION1</option>
                <option>CODIGO2|DESCRIPCION2</option>
                <option>CODIGO3|DESCRIPCION3</option>
                <option>CODIGO4|DESCRIPCION4</option>
                <option>CODIGO5|DESCRIPCION5</option>
              </Input>
            </Col>
          </FormGroup>
        </ModalBody>
        <ModalFooter>
          {elegido}<Button color="primary" onClick={() => props.add(document.getElementById('selectMulti').value)}>{props.aceptar}</Button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        </ModalFooter>
      </Modal>
    </div>
  );
}



class Filter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      tipo: "agregar"
    }
  }

  toggleModal(tipoAux) {
    this.setState({ isOpen: !this.state.isOpen, tipo: tipoAux })
  }

  add(datos) {
    //aqui hacer algo con los datos
    // Recupero el textarea dependiendo de si es tipo agregar o quitar
    let textarea
    if (this.state.tipo === "agregar"){
      textarea = document.getElementById('rxseleccionar')
    } else {
      textarea = document.getElementById('rxenmascarar')
    }
    textarea.innerHTML += datos + "\n"
    this.toggleModal();
  }

  clear(tipo) {
    if (tipo === "agregar"){
      document.getElementById('rxseleccionar').innerHTML = ''
    } else {
      document.getElementById('rxenmascarar').innerHTML = ''
    }
  }

  render() {
    return <>
      <div>
        <UncontrolledAccordion
          defaultOpen={[
            '1'
          ]}
          stayOpen
        >
          <AccordionItem>
            <AccordionHeader targetId="1">
              GESTION DE FARMACOS
            </AccordionHeader>
            <AccordionBody accordionId="1">
              <Row>
                <Col>
                  <Alert color="info">
                    Incluir X Medicamentos:
                    <Input type="textarea" name="rxseleccionar" id='rxseleccionar' />
                    <Button color="info" onClick={()=>{this.toggleModal("agregar")}}>Add</Button>
                    {" "}<Button color="info" onClick={() => (this.clear("agregar"))}>Clear</Button>
                  </Alert>
                </Col>
                <Col>
                  <Alert color="danger">
                    Excluir X Medicamentos:
                    <Input type="textarea" name="rxenmascarar" id='rxenmascarar' />
                    <Button color="danger" onClick={()=>{this.toggleModal("quitar")}}>Add</Button>
                    {" "}<Button color="danger" onClick={() => (this.clear("quitar"))}>Clear</Button>
                  </Alert>
                </Col>
              </Row>
            </AccordionBody>
          </AccordionItem>
        </UncontrolledAccordion>
      </div>
      <VentanaModalDiccionario 
        add={(datos) => this.add(datos)} 
        mostrar={this.state.isOpen} 
        aceptar={"Añadir"}
        titulo={"VENTANA MODAL"}
      />
      <br />
    </>
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <Filter />
      </div>
    );
  }
}

export default App;