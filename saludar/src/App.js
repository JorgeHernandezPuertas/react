import React from 'react';
import { Button, Spinner } from 'reactstrap';

function Boton(props) {
  return (
    <Button color={props.color} onClick={() => props.cambia(props.idioma)} outline >
      {props.idioma}
    </Button>
  );
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      letrero: "Saludo en diferentes idiomas",
    }
  }

  cambia(idioma){
    if (idioma == "Ingles"){
      this.setState({letrero:"Hello"})
    } else if (idioma == "Frances") {
      this.setState({letrero:"Bonjour"})
    } else if (idioma == "Español") {
      this.setState({letrero:"Hola"})
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
        <Boton color="secondary" idioma="Ingles" cambia={(idioma) => this.cambia(idioma)} />
        <Boton color="danger" idioma="Frances" cambia={(idioma) => this.cambia(idioma)} />
        <Boton color="primary" idioma="Español" cambia={(idioma) => this.cambia(idioma)} />
      </div>
    );
  }
}

export default App;
