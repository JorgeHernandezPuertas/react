import React from 'react';
import { Button } from 'reactstrap';
/*
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      color: danger,
    }
  }

  cambiarColor() {
    let c = this.state.color == "danger" ? "success" : "danger";
    this.setState({color:c});
  }

  render() {
    return (
      <div className="App">
        <p>prueba</p>
        <Boton color={this.state.color} cambia={() => this.cambia()} />
        <Button color={this.state.color} onClick={() => this.cambiarColor} >Pulsa para cambiar de color</Button>
      </div>
    );
  }
}
*/

class Boton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      color: danger,
    }
  }

  cambiarColor() {
    let c = this.state.color == "danger" ? "success" : "danger";
    this.setState({color:c});
  }

  render() {
    return (
      <div className="App">
        <Button color={this.state.color} onClick={() => this.cambiarColor} >Pulsa para cambiar de color</Button>
      </div>
    );
  }
}

function App() {
  const [color, setColor] = useState("danger");


  function cambiarColor(){
    let c = color == "danger" ? "success" : "danger";
    setColor(c);
  }


  return (
    <div>
      <p>hola</p>
      <Button color={color} onClick={() => cambiarColor()} >Pulsa para cambiar de color</Button>
    </div>
  );
}

export default App
