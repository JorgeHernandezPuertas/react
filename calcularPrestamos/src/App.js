import React from 'react';
import Form from './components/Form.js';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cuota: null,
    }
  }

  handleSubmit(event) {
    event.preventDefault();

    // Recojo los valores de los campos del formulario
    const cantidad = event.target.cantidad.value;
    const interes = event.target.interes.value;
    const anios = event.target.anios.value;
    const meses = event.target.meses.value + anios * 12;

    // Limpio los campos del form
    event.target.cantidad.value = "";
    event.target.interes.value = "";
    event.target.anios.value = "";
    event.target.meses.value = "";

    if (typeof cantidad === "number" && typeof interes === "number" && typeof anios === "number" && typeof mese === "number") {
      // Calculo la cuota
      const newCuota = cantidad * ((Math.pow(1 + interes, meses) * interes) / (Math.pow(1 + interes, meses) - 1));
      // Establezco la cuota en la interfaz
      this.setState({ cuota: newCuota });
    }
  }

  render() {
    return (
      <div className="App">
        {this.state.cuota && <p><strong>Su cuota será de</strong> {this.state.cuota}</p>}
        <Form handler={(e) => this.handleSubmit(e)} />
      </div>
    );
  }
}

export default App;
