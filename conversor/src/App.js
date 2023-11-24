import { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'reactstrap';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      euros: 0,
      factor: 1.1,
    }
  }
  aumentar() {
    let auxEuro = this.state.euros+1;
    this.setState({euros:auxEuro})
  }
  disminuir(){
    let auxEuro = this.state.euros-1;
    this.setState({euros:auxEuro})
  }
  render() {
    return (
      <div className="App">
        <p>
          {this.state.euros} Euros equivalen a {this.state.euros * this.state.factor} Dólares
        </p>
        <p>
          <Button onClick={() => this.aumentar()}>+</Button><Button onClick={() => this.disminuir()}>-</Button>
        </p>
      </div>
    );
  }
}

export default App;
