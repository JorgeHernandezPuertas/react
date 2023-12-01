import React from 'react';
import './App.css';
import SelectorMinas from './components/selectorMinas';
import Botonera from './components/botonera';
import Campo from './components/campo.js';
import Jugar from './components/jugar.js';
import Ganador from './components/ganador.js';
import SelectorTam from './components/selectorTam.js';
import { Button } from 'reactstrap';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      numMinas: 10,
      filas: 10,
      columnas: 10,
      posicion: { x: 0, y: 0 },
      campoMinas: null,
      terminado: { acabado: false, ganado: false },
    }
  }

  resetJuego = (campo) => {
    this.setState({ posicion: { x: 0, y: 0 }, campoMinas: campo, terminado: { acabado: false, ganado: false } });
  }

  iniciarJuego = () => {
    // Creo la matriz
    let campo = Array(this.state.filas);
    for (let i = 0; i < this.state.filas; i++) {
      campo[i] = Array(this.state.columnas);
      for (let j = 0; j < this.state.columnas; j++) {
        campo[i][j] = 5;
      }
    }
    // Pongo las minas
    campo = this.ponerMinas(campo);
    // Marco las distancias
    campo = this.marcarDistancias(campo);
    this.resetJuego(campo);
  }

  marcarDistancias = (campo) => {
    // Recorro el campo buscando las minas
    for (let i = 0; i < campo.length; i++) {
      for (let j = 0; j < campo[i].length; j++) {
        // Si encuento una bomba marco distancias
        if (campo[i][j] == 0) {
          const posMina = { x: j, y: i };
          this.ponerDistancia(campo, posMina);
        }
      }
    }

    return campo;
  }

  ponerDistancia = (campo, posMina) => {
    // Cojo el rango max como el length más grande
    let rangoMax = campo.length < campo[posMina.y].length ? campo[posMina.y].length : campo.length;

    // Para todos los rangos posibles
    for (let rango = 1; rango >= rangoMax; rango++) {
      // Recorro el area del rango que toque
      for (let i = posMina.y - rango; i <= posMina.y + rango; i++) {
        for (let j = posMina.x - rango; j <= posMina.x + rango; j++) {
          // Si está dentro del campo
          if (i >= 0 && j >= 0 && i < campo.length && j < campo[i].length) {
            // Miro solo el perimetro del rango, que es lo único que necesito
            if (i == posMina.y - rango || j == posMina.x - rango || i == posMina.y + rango || j == posMina.y + rango) {
              // Si el elemento no es la bomba y es mayor que el rango lo cambio por el rango menor q le toque
              if (campo[i][j] != 0 && campo[i][j] > rango) {
                // Si el rango es mayor o igual que 4 lo dejo en 4
                campo[i][j] = rango >= 4 ? 4 : rango;
              }
            }
          }
        }
      }
    }
    return campo;
  }

  generarPosicion = () => {
    let aleatorioFila = Math.floor(Math.random() * this.state.filas);
    let aleatorioColumna = Math.floor(Math.random() * this.state.columnas);
    let posMina = { x: aleatorioColumna, y: aleatorioFila };
    return posMina;
  }

  ponerMinas = (campoMinas) => {
    let minas = 0;
    while (minas <= this.state.numMinas) {
      let posMina = this.generarPosicion();
      // No dejo poner una mina donde empiezo, donde termino y donde ya haya una
      if ((posMina.y === 0 && posMina.x === 0) ||
        (posMina.y === (this.state.filas - 1) && posMina.x == (this.state.columnas - 1)) ||
        (campoMinas[posMina.y][posMina.x] === 0)) {
        continue;
      }
      campoMinas[posMina.y][posMina.x] = 0;
      minas++;
    }

    return campoMinas;
  }

  mover(lado) {
    if (!this.state.terminado.acabado) { // Si termina no me muevo
      const auxActual = JSON.parse(JSON.stringify(this.state.posicion));
      switch (lado) {
        case "izquierda":
          if (this.state.posicion.x != 0) {
            auxActual.x = auxActual.x - 1; // Lo muevo uno a la izquierda
            this.comprobarTerminado(auxActual);
          }
          break;
        case "derecha":
          if (this.state.posicion.x < this.state.columnas - 1) {
            auxActual.x = auxActual.x + 1; // Lo muevo uno a la derecha
            this.comprobarTerminado(auxActual);
          }
          break;
        case "abajo":
          if (this.state.posicion.y < this.state.filas - 1) {
            auxActual.y = auxActual.y + 1; // Lo muevo uno a la derecha
            this.comprobarTerminado(auxActual);
          }
          break;
        case "arriba":
          if (this.state.posicion.y != 0) {
            auxActual.y = auxActual.y - 1; // Lo muevo uno a la derecha
            this.comprobarTerminado(auxActual);
          }
          break;
      }
      this.setState({ posicion: auxActual });
    }
  }

  comprobarTerminado(posicionNueva) {
    const auxTerminado = JSON.parse(JSON.stringify(this.state.terminado));
    const posicionGanadora = { x: this.state.columnas - 1, y: this.state.filas - 1 }
    // Si piso una mina acabo y pierdo
    if (this.state.campoMinas[posicionNueva.y][posicionNueva.x] === 0) {
      auxTerminado.acabado = true;
      auxTerminado.ganador = false;
      this.setState({ terminado: auxTerminado })
    } else if (posicionNueva.x === posicionGanadora.x && posicionNueva.y === posicionGanadora.y) {
      auxTerminado.acabado = true;
      auxTerminado.ganado = true;
      this.setState({ terminado: auxTerminado })
    }
  }

  aumentar() { // El máx es llenar todo el campo
    const aux = this.state.numMinas;
    if (aux < this.state.filas + this.state.columnas) {
      this.setState({ numMinas: (aux + 1) });
    }
  }
  disminuir() { // El mín es 0
    const aux = this.state.numMinas;
    if (aux > 0) {
      this.setState({ numMinas: (aux - 1) });
    }

  }

  cambiarTam = (accion, parte) => {
    if (parte == "fila" && accion == "aumentar") {
      this.setState({ filas: this.state.filas + 1 });
    } else if (parte == "columna" && accion == "aumentar") {
      this.setState({ columnas: this.state.columnas + 1 });
    }
    if (parte == "fila" && accion == "disminuir") {
      this.setState({ filas: this.state.filas - 1 });
    } else if (parte == "columna" && accion == "disminuir") {
      this.setState({ columnas: this.state.columnas - 1 });
    }
  }

  render() {
    return (
      <div className="App">
        <SelectorTam filas={this.state.filas} columnas={this.state.columnas} cambiarTam={(accion, parte) => this.cambiarTam(accion, parte)} />
        <SelectorMinas numMinas={this.state.numMinas} aumentar={() => this.aumentar()} disminuir={() => this.disminuir()} />
        <Jugar filas={this.state.filas} columnas={this.state.columnas} iniciarJuego={() => this.iniciarJuego()} />
        {this.state.terminado.acabado && <Ganador ganado={this.state.terminado.ganado} />}
        {this.state.campoMinas && <Campo posicion={this.state.posicion} campo={this.state.campoMinas} />}
        {this.state.campoMinas && <Botonera mover={(lado) => this.mover(lado)} />}
        {this.state.campoMinas && <footer>
          <Button color='danger' >Bomba</Button>
          <Button color='warning' >1</Button>
          <Button color='info' >2</Button>
          <Button color='primary' >3</Button>
          <Button color='secondary' >4+</Button>
        </footer>}
      </div>
    );
  }


}

export default App;
