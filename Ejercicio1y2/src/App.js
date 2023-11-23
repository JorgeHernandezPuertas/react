import React from 'react';
import { Button } from 'reactstrap';

const Boton = (props) => {

    return (
      <div className="App">
        <Button color={props.color} onClick={() => props.cambiarColor()} >Pulsa para cambiar de color</Button>
      </div>
    );
  
}

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      color: "danger",
    }
  }

  cambiarColor() {
    let c = this.state.color == "danger" ? "success" : "danger";
    this.setState({color:c})
  }

  render(){
    return (
      <div>
        <Boton color={this.state.color} cambiarColor={() => this.cambiarColor()} >Pulsa para cambiar de color</Boton>
      </div>
    );
  }
}

export default App;
