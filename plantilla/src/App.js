import React from 'react';
import { Button } from 'reactstrap';

function Boton(props) {
  return (
    <Button>
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

  render() {
    return (
      <div className="App">
        <Boton />
      </div>
    );
  }
}

export default App;
