import React from 'react';
import { Button } from 'reactstrap';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // DEFINE AQUÍ TU ESTADO
      botones: Array(5).fill({cont: 0, color: "secondary"}),
    };
  }

  clickado(boton){
    let aux = JSON.parse(JSON.stringify(this.state.botones));
    if (aux[boton].color !== "danger"){
      aux[boton].color = "danger" ;
    }
    aux[boton].cont = aux[boton].cont + 1;
    this.setState({botones:aux});
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <br/><span>&nbsp;</span>
          <Botoncillo numBoton={0} pulsado={(i) => this.clickado(i)} color={this.state.botones[0].color} contador={this.state.botones[0].cont} />
          <span>&nbsp;</span>
          <Botoncillo numBoton={1} pulsado={(i) => this.clickado(i)} color={this.state.botones[1].color} contador={this.state.botones[1].cont} />
          <span>&nbsp;</span>
          <Botoncillo numBoton={2} pulsado={(i) => this.clickado(i)} color={this.state.botones[2].color} contador={this.state.botones[2].cont} />
          <span>&nbsp;</span>
          <Botoncillo numBoton={3} pulsado={(i) => this.clickado(i)} color={this.state.botones[3].color} contador={this.state.botones[3].cont} />
          <span>&nbsp;</span>
          <Botoncillo numBoton={4} pulsado={(i) => this.clickado(i)} color={this.state.botones[4].color} contador={this.state.botones[4].cont} />
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
