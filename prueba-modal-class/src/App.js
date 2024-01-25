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
  const [options] = useState(['CODIGO1|DESCRIPCION1', 'CODIGO2|DESCRIPCION2', 'CODIGO3|DESCRIPCION3', 'CODIGO4|DESCRIPCION4', 'CODIGO5|DESCRIPCION5'])

  const handleChange = (event) => { // Buscador de filtro
    // COMPLETA ESTA FUNCION
    let elegidoAux;
    // Me quedo con los hijos en los que matcheen la busqueda y mapeo el array para quedarme con los valores
    const matchings = options.find((e) => e.toLowerCase().includes(event.target.value.toLowerCase()))
    // Si tengo algun match pongo el primero como value
    if (matchings !== undefined) {
      // Pongo la elegida por ahora donde tiene que ir
      elegidoAux = matchings
    } else {
      elegidoAux = ""
    }
    setElegido(elegidoAux)
  }

  const handleClick = (event) => {
    setElegido(event.target.value)
  }

  return (
    <div>
      <Modal isOpen={ props.mostrar } toggle={ props.toggle } className={ className } onEntering={ "//ESTO SE EJECUTA CUANDO MUESTRAS LA VENTANA" }>
        <ModalHeader toggle={ props.toggle }>{ props.titulo }</ModalHeader>
        <ModalBody>
          <FormGroup row>
            <Label sm={ 2 } > Filtrar: </Label>
            <Col sm={ 10 }>
              <Input onChange={ handleChange }
                id="filtro"
                name="filtro"
                type="Text" />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Col sm={ 12 }>
              <Input onChange={ handleChange } onClick={ handleClick }
                id="selectMulti"
                name="selectMulti"
                type="select"
                value={ elegido }
              >
                { options.map((e) => <option>{ e }</option>) }
              </Input>
            </Col>
          </FormGroup>
        </ModalBody>
        <ModalFooter>
          { elegido }<Button color="primary" onClick={ () => props.add(elegido) }>{ props.aceptar }</Button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
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
      tipo: "agregar",
      medicinasIncluidas: [],
      medicinasExcluidas: [],
    }
  }

  toggleModal (tipoAux) {
    this.setState({ isOpen: !this.state.isOpen, tipo: tipoAux })
  }

  add (datos) {
    //aqui hacer algo con los datos
    // Recupero el textarea dependiendo de si es tipo agregar o quitar
    if (datos !== undefined) {
      if (this.state.tipo === "agregar") {
        const medicinaAux = this.state.medicinasIncluidas.slice()
        medicinaAux.push(datos)
        this.setState({ medicinasIncluidas: medicinaAux })
      } else {
        const medicinaAux = this.state.medicinasExcluidas.slice()
        medicinaAux.push(datos)
        this.setState({ medicinasExcluidas: medicinaAux })
      }
      this.toggleModal();
    }
  }

  clear (tipo) {
    if (tipo === "agregar") {
      this.setState({ medicinasIncluidas: [] })
    } else {
      this.setState({ medicinasExcluidas: [] })
    }
  }

  render () {
    return <>
      <div>
        <UncontrolledAccordion
          defaultOpen={ [
            '1'
          ] }
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
                    <Input type="textarea" name="rxseleccionar" id='rxseleccionar' value={ this.state.medicinasIncluidas.map((e1) => e1 + "\n") } />
                    <Button color="info" onClick={ () => this.toggleModal("agregar") }>Add</Button>
                    { " " }<Button color="info" onClick={ () => (this.clear("agregar")) }>Clear</Button>
                  </Alert>
                </Col>
                <Col>
                  <Alert color="danger">
                    Excluir X Medicamentos:
                    <Input type="textarea" name="rxenmascarar" id='rxenmascarar' value={ this.state.medicinasExcluidas.map((e) => e + '\n') } />
                    <Button color="danger" onClick={ () => { this.toggleModal("quitar") } }>Add</Button>
                    { " " }<Button color="danger" onClick={ () => (this.clear("quitar")) }>Clear</Button>
                  </Alert>
                </Col>
              </Row>
            </AccordionBody>
          </AccordionItem>
        </UncontrolledAccordion>
      </div>
      <VentanaModalDiccionario
        add={ (datos) => this.add(datos) }
        mostrar={ this.state.isOpen }
        aceptar={ "Añadir" }
        titulo={ "VENTANA MODAL" }
      />
      <br />
    </>
  }
}

class App extends Component {
  render () {
    return (
      <div className="App">
        <Filter />
      </div>
    );
  }
}

export default App;