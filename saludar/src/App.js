import React from 'react';
import { Button, Spinner } from 'reactstrap';

function Boton(props) {
  return (
    <Button color={props.color} onClick={() => props.cambia(props.idioma, props.color)} outline >
      {props.idioma}
    </Button>
  );
}

const Circulo = (props) => {
  return (
    <Spinner color={props.color} type="grow" onClick={() => props.cambia()} ></Spinner>
  );
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      colorSpinner: "secondary",
      letrero: "Saludo en diferentes idiomas",
    }
  }

  cambia(idioma, color){
    if (idioma == "Ingles"){
      this.setState({colorSpinner:color})
    } else if (idioma == "Frances") {
      this.setState({colorSpinner:color})
    } else if (idioma == "Español") {
      this.setState({colorSpinner:color})
    } else {
      this.setState({letrero:"Ninguno"})
    }
  }
  cambiaLetrero(){
    this.setState({letrero:this.state.colorSpinner})
  }

  render() {
    return (
      <div className="App">
        <h1>{this.state.letrero}</h1>
        <Boton color="secondary" idioma="Ingles" cambia={(idioma, color) => this.cambia(idioma, color)} />
        <Boton color="danger" idioma="Frances" cambia={(idioma, color) => this.cambia(idioma, color)} />
        <Boton color="primary" idioma="Español" cambia={(idioma, color) => this.cambia(idioma, color)} />
        <Circulo color={this.state.colorSpinner} cambia={() => this.cambiaLetrero()} ></Circulo>
      </div>
    );
  }
}

export default App;
