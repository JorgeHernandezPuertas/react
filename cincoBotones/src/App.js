import React from 'react';
import { Button, Spinner } from 'reactstrap';

function Botoncico(props) {
  return (
    <Button color={props.color} onClick={() => props.cambiarColor(props.color)} outline >
      Pulsa para cambiar de color.
    </Button>
  );
}

function Spinico(props) {
  return (
    <Spinner color={props.color} type='grow' />
  );
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      colorSpinner: "secondary",
    }
  }

  cambiarColor(color){
    this.setState({colorSpinner:color})
  }

  render() {
    return (
      <div className="App">
        <Botoncico color="secondary" cambiarColor={(color) => this.cambiarColor(color)} />
        <Botoncico color="danger" cambiarColor={(color) => this.cambiarColor(color)} />
        <Botoncico color="success" cambiarColor={(color) => this.cambiarColor(color)} />
        <Botoncico color="primary" cambiarColor={(color) => this.cambiarColor(color)} />
        <Botoncico color="dark" cambiarColor={(color) => this.cambiarColor(color)} />
        <br/>
        <Spinico color={this.state.colorSpinner} />
      </div>
    );
  }
}

export default App;
