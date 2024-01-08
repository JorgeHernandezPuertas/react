import React, { Component } from 'react';
import { Button } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

const MapaBotones = ({ listaBotones, listaColores, handleClick }) => {

  const botonesAux = JSON.parse(JSON.stringify(listaBotones));
  console.log(botonesAux);

  const botones = botonesAux.map((e, altura) => {
    let contador = -1;
    return e.map((e2, columna) => {
      contador++;
      if (altura === 0 && e2 === null) { // Cuando sea la primera fila y esté en blanco aún le pongo el handleClick
        return <Button key={contador} color='light' onClick={() => handleClick(columna)} ></Button>;
      }
      if (e2 === null) return <Button key={contador} color='light' ></Button>;
      if (e2 === listaColores[0]) return <Button key={contador} color={listaColores[0]} className='coloreado' ></Button>;
      if (e2 === listaColores[1]) return <Button key={contador} color={listaColores[1]} className='coloreado' ></Button>;

    })
  });
  console.log(botones);

  return (
    <div className='tablero'>
      {botones}
    </div>
  );

}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listaBotones: this.crearMatriz(),
      listaColores: ["primary", "danger"],
      turnos: ["Azules", "Rojos"],
      turno: "Azules",
      finalizado: { ganador: null, terminado: false }
    }
  }

  handleClick(columna) {
    if (!this.state.finalizado.terminado) {
      // Cambio el turno
      const turnoAux = this.state.turno === this.state.turnos[0] ? this.state.turnos[1] : this.state.turnos[0];
      // Pongo el color de la ficha en mi lista
      const botonesAux = this.ponerFicha(columna);
      // Compruebo ganador
      const finalizadoAux = this.comprobarGanador(botonesAux);

      // Refresco los valores de state para rerenderizar con lo cambiado
      this.setState({ listaBotones: botonesAux, turno: turnoAux, finalizado: finalizadoAux });
    }


  }

  ponerFicha(columna) {
    const matriz = JSON.parse(JSON.stringify(this.state.listaBotones));
    for (let i = matriz.length - 1; i >= 0; i--) {
      if (matriz[i][columna] === null) {
        matriz[i][columna] = this.state.turno === this.state.turnos[0] ? this.state.listaColores[0] : this.state.listaColores[1];
        break;
      }
    }
    return matriz;
  }

  comprobarGanador(matriz) {
    const finalizadoAux = JSON.parse(JSON.stringify(this.state.finalizado));

    if (this.comprobarEmpate(matriz)) {
      finalizadoAux.ganador = "Empate";
      finalizadoAux.terminado = true;
    }

    // Compruebo si gana
    // Establezco el color a comprobar y el tamaño para ganar
    const color = this.state.turno === this.state.turnos[0] ? this.state.listaColores[0] : this.state.listaColores[1];
    const tamanio = 4;
    for (let i = 0; i < matriz.length; i++) {
      for (let j = 0; j < matriz[i].length; j++) {
        if (this.comprobarFila(matriz, i, j, color, tamanio) || this.comprobarColumna(matriz, i, j, color, tamanio) || this.comprobarDiagonalDescendente(matriz, i, j, color, tamanio) || this.comprobarDiagonalAscendente(matriz, i, j, color, tamanio)) {
          finalizadoAux.ganador = "Ganan los " + this.state.turno;
          finalizadoAux.terminado = true;
        }
      }
    }
    return finalizadoAux;
  }

  comprobarEmpate(matriz) {
    // Compruebo si han gastado todas las casillas (empate)
    for (let i = 0; i < matriz[0].length; i++) {
      // Si encuentro un null en la primera fila es que no han acabado en empate
      if (matriz[0][i] === null) {
        break;
      }
      // Si i es igual a la longitud - 1, es que no he encontrado ningún null, por lo que es empate
      if (matriz[0].length - 1 === i) {
        // Si es empate devuelvo true
        return true;
      }
    }
    // Si no es empate devuelvo false
    return false;
  }

  comprobarFila(matriz, fila, columna, color, tamanio) {
    for (let i = columna; i < matriz[fila].length; i++) {
      if (matriz[fila][i] !== color) {
        break;
      }
      // Si la cantidad de elementos recorridos antes de romper el bucle es el tamaño, es que ha ganado
      if (i - columna + 1 === tamanio) {
        return true;
      }
    }
    // Devuelvo false si no ha ganado por la fila
    return false;
  }

  comprobarColumna(matriz, fila, columna, color, tamanio) {
    for (let i = fila; i < matriz.length; i++) {
      if (matriz[i][columna] !== color) {
        break;
      }
      // Si la cantidad de elementos recorridos antes de romper el bucle es el tamaño, es que ha ganado
      if (i - fila + 1 === tamanio) {
        return true;
      }
    }
    // Devuelvo false si no ha ganado por la fila
    return false;
  }

  comprobarDiagonalDescendente(matriz, fila, columna, color, tamanio) {
    let colAux = columna;
    for (let i = fila; i < matriz.length; i++) {
      if (colAux >= matriz[i].length || matriz[i][colAux] !== color) {
        break;
      }
      // Si la cantidad de elementos recorridos antes de romper el bucle es el tamaño, es que ha ganado
      if (i - fila + 1 === tamanio) {
        return true;
      }
      colAux++;
    }
    // Devuelvo false si no ha ganado por la fila
    return false;
  }

  comprobarDiagonalAscendente(matriz, fila, columna, color, tamanio) {
    let colAux = columna;
    for (let i = fila; i < matriz.length; i++) {
      if (colAux < 0 || matriz[i][colAux] !== color) {
        break;
      }
      // Si la cantidad de elementos recorridos antes de romper el bucle es el tamaño, es que ha ganado
      if (i - fila + 1 === tamanio) {
        return true;
      }
      colAux--;
    }
    // Devuelvo false si no ha ganado por la fila
    return false;
  }

  crearMatriz() {
    const matriz = [];
    for (let i = 0; i < 9; i++) {
      matriz.push(Array(9).fill(null));
    }
    return matriz;
  }

  componentWillMount() {
    // Utilízalo si necesitas hacer algo antes de renderizar

  }

  render() {
    return (
      <div className="App">
        <h2>Turno: {this.state.turno}</h2>
        <MapaBotones listaBotones={this.state.listaBotones} listaColores={this.state.listaColores} handleClick={(i) => this.handleClick(i)} />
        {this.state.finalizado.terminado && <h1>Resultado: {this.state.finalizado.ganador}</h1>}
      </div>
    );
  }
}
export default App;