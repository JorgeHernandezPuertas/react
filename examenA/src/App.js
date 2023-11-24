import React from 'react';
import { Button } from 'reactstrap';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // DEFINE AQUÍ TU ESTADO
      botones: Array(5).fill("secondary"),
      letrero: 0,
      ultPulsado: 0,
    };
  }

  pulsado(boton) {
    let aux = JSON.parse(JSON.stringify(this.state.botones));
    aux[this.state.ultPulsado] = "secondary";
    aux[boton] = "danger";
    this.setState({letrero: this.state.letrero + 1, botones: aux, ultPulsado: boton});
  }


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h2>{this.state.letrero}</h2>
          <Botoncillo idBoton={0}  color={this.state.botones[0]} clickado={(i) => this.pulsado(i)} />
          <Botoncillo idBoton={1} color={this.state.botones[1]} clickado={(i) => this.pulsado(i)} />
          <Botoncillo idBoton={2} color={this.state.botones[2]} clickado={(i) => this.pulsado(i)} />
          <Botoncillo idBoton={3} color={this.state.botones[3]} clickado={(i) => this.pulsado(i)} />
          <Botoncillo idBoton={4} color={this.state.botones[4]} clickado={(i) => this.pulsado(i)} />
        </header>
      </div>
    );
  }
}

function Botoncillo(props) {
  return (
    // MUESTRA AQUÍ EL BOTÓN CON EL COLOR
    <Button color={props.color} onClick={() => props.clickado(props.idBoton)} ></Button>
  );
}

export default App;
