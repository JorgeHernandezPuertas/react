import React from 'react';
import SelectorMinas from './components/selectorMinas';
import Botonera from './components/botonera';
import Campo from './components/campo.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      numMinas: 10,
      campoMinas: Array(10).fill(Array(10).fill(1)),
      posicion: {x:0, y:0},
    }
  }

  aumentar() {
    const aux = this.state.numMinas;
    this.setState({ numMinas: (aux + 1) });
  }
  disminuir() {
    const aux = this.state.numMinas;
    this.setState({ numMinas: (aux - 1) });
  }

  render(){
    return (
      <div className="App">
        <SelectorMinas numMinas={this.state.numMinas} aumentar={() => this.aumentar()} disminuir={() => this.disminuir()} />
        <Botonera />
        <Campo pos={this.state.posicion} filas={this.state.campoMinas.length} columnas={this.state.campoMinas[0].length} />
      </div>
    );
  }


}

export default App;
