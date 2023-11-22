import React from 'react';
import { Button } from 'reactstrap';

function Boton(props) {
  return (
    <Button color={props.color} onClick={() => props.cambia()}>
      Pulsa para cambiar de color.
    </Button>
  );
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      color: "danger",
    }
  }

  cambia() {
    let c = this.state.color === "danger" ? "success" : "danger";
    this.setState({ color: c });
  }

  render() {
    return (
      <div className="App">
        <Boton color={this.state.color} cambia={() => this.cambia()} />
      </div>
    );
  }
}

export default App;
