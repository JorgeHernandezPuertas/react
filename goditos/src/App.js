import 'bootstrap/dist/css/bootstrap.css';
import { Component } from "react";
import { Button } from "reactstrap";
import './App.css';

const GODOS = [
  {
    id: 0,
    imagen: "assets/images/Leovigildo.jpeg",
    nombre: "Leovigildo"
  },
  {
    id: 1,
    imagen: "assets/images/Atanagildo.jpeg",
    nombre: "Atanagildo"
  },
  {
    id: 2,
    imagen: "assets/images/Suintila.jpeg",
    nombre: "Suintila"
  },
  {
    id: 3,
    imagen: "assets/images/Recaredo.jpeg",
    nombre: "Recaredo"
  },
  {
    id: 4,
    imagen: "assets/images/Witiza.jpeg",
    nombre: "Witiza"
  },
  {
    id: 5,
    imagen: "assets/images/Amalarico.jpeg",
    nombre: "Amalarico"
  },
  {
    id: 6,
    imagen: "assets/images/Recesvinto.jpeg",
    nombre: "Recesvinto"
  },
  {
    id: 7,
    imagen: "assets/images/Sisebuto.jpeg",
    nombre: "Sisebuto"
  },
  {
    id: 8,
    imagen: "assets/images/Ervigio.jpeg",
    nombre: "Ervigio"
  }
]

function ReyesGodos ({ godos, actual, handleAnterior, handleSiguiente }) {

  if (godos.length === 0) return <h1>NO HAY REYES</h1>

  // Recupero el godo que esté en la posición actual
  const godoActual = godos[actual]

  return (
    <div className='d-flex'>
      <Button onClick={ handleAnterior }>Anterior</Button>
      <h1>{ godoActual.nombre }</h1>
      <Button onClick={ handleSiguiente }>Siguiente</Button>
    </div>
  )
}

function CambioBando ({ godos, normandos, cambiarBando }) {
  const listaGodos = godos.map(godo => <Button onClick={ () => cambiarBando(godo) } key={ godo.id }>{ godo.nombre }</Button>)
  const listaNormandos = normandos.map(normando => <Button onClick={ () => cambiarBando(normando) } key={ normando.id }>{ normando.nombre }</Button>)

  return (
    <div>
      <h1>GODOS</h1>
      { listaGodos }
      <h1>NORMANDOS</h1>
      { listaNormandos }
    </div>
  )
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      godos: GODOS,
      normandos: [],
      actual: 0,
    }
  }

  handleAnterior () {
    if (this.state.actual !== 0) {
      this.setState({ actual: this.state.actual - 1 })
    }
  }

  handleSiguiente () {
    if (this.state.godos.length - 1 !== this.state.actual) {
      this.setState({ actual: this.state.actual + 1 })
    }
  }

  cambiarBando (object) {
    let godosAux = JSON.parse(JSON.stringify(this.state.godos))
    let normandosAux = JSON.parse(JSON.stringify(this.state.normandos))
    const godoActual = godosAux[this.state.actual]
    // Está en godos
    if (godosAux.find(g => g.id === object.id)) {
      godosAux = godosAux.filter(g => g.id !== object.id)
      normandosAux.push(object)
      const indexActual = godosAux.findIndex(g => g.id === godoActual.id)
      if (indexActual === -1) {
        this.setState({ godos: godosAux, normandos: normandosAux, actual: 0 })
      } else {
        this.setState({ godos: godosAux, normandos: normandosAux, actual: indexActual })
      }
    } else { // Está en normandos
      normandosAux = normandosAux.filter(n => n.id !== object.id)
      godosAux.push(object)
      this.setState({ godos: godosAux, normandos: normandosAux })
    }
  }

  render () {
    return (
      <>
        <ReyesGodos godos={ this.state.godos } actual={ this.state.actual }
          handleAnterior={ () => this.handleAnterior() }
          handleSiguiente={ () => this.handleSiguiente() } />
        <CambioBando cambiarBando={ (o) => this.cambiarBando(o) } godos={ this.state.godos }
          normandos={ this.state.normandos } />
      </>
    );
  }
}

export default App