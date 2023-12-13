import React from 'react';
import logo from './logo.svg';
import './App.css';
import DesireList from './components/DesireList';
import DesireForm from './components/DesireForm';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      desires: [
        "Gambas", "Jamón"
      ],
    }
  }

  handleAddDesire(event) {
    event.preventDefault();

    const newDesire = event.target.desire.value;
    const auxDesires = JSON.parse(JSON.stringify(this.state.desires));
    auxDesires.push(newDesire);

    event.target.desire.value = "";

    this.setState({ desires: auxDesires });
  }

  quitar(indexElement) {
    const auxDesires = this.state.desires.filter((item, index) => index !== indexElement);
    this.setState({ desires: auxDesires });
  }

  render() {
    return (
      <div className="App">
        <div>
          <img src={logo} className='App-Logo' alt='logo' width="400px" heigth="400px" />
          <h2>Lista de deseos.</h2>
          <DesireList desires={this.state.desires} quitar={(i) => this.quitar(i)} />
        </div>
        <div>
          <p><strong>Añade tu deseo favorito.</strong></p>
          <DesireForm handleClick={(e) => this.handleAddDesire(e)} />
        </div>
      </div>
    );
  }
}

export default App;
