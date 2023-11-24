import React from 'react';
import { Button } from 'reactstrap';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // DEFINE AQUÍ TU ESTADO
      botones: Array(5).fill(0),
      colores: Array(5).fill("secondary"),
    };
  }

  clickado(boton){
    this.aumentar(boton);
    this.cambiarColor(boton);
  }

  cambiarColor(boton){
    let aux = JSON.parse(JSON.stringify(this.state.colores));
    if (aux[boton] !== "danger"){ // Si no lo habian pulsado le cambio el color
      aux[boton] = "danger" ;
      this.setState({colores:aux});
    }
  }

  aumentar(boton) {
    let aux = JSON.parse(JSON.stringify(this.state.botones));
    aux[boton]++ ;
    this.setState({botones:aux});
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <br/><span>&nbsp;</span>
          <Botoncillo numBoton={0} pulsado={(i) => this.clickado(i)} color={this.state.colores[0]} contador={this.state.botones[0]} />
          <span>&nbsp;</span>
          <Botoncillo numBoton={1} pulsado={(i) => this.clickado(i)} color={this.state.colores[1]} contador={this.state.botones[1]} />
          <span>&nbsp;</span>
          <Botoncillo numBoton={2} pulsado={(i) => this.clickado(i)} color={this.state.colores[2]} contador={this.state.botones[2]} />
          <span>&nbsp;</span>
          <Botoncillo numBoton={3} pulsado={(i) => this.clickado(i)} color={this.state.colores[3]} contador={this.state.botones[3]} />
          <span>&nbsp;</span>
          <Botoncillo numBoton={4} pulsado={(i) => this.clickado(i)} color={this.state.colores[4]} contador={this.state.botones[4]} />
        </header>
      </div>
    );
  }
}

function Botoncillo(props) {
  return (
    // MUESTRA AQUÍ EL BOTÓN CON EL COLOR
    <Button color={props.color} onClick={() => props.pulsado(props.numBoton)}>{props.contador}</Button>
  );
}

export default App;
