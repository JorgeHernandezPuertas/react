import React from 'react';
import { Button } from 'reactstrap';
import UserList from './components/UserList';
import UserForm from './components/UserForm';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [
        { id: 1, name: "perico", email: "perico@myfpschool.com" },
        { id: 2, name: "juanico", email: "juanico@myfpschool.com" },
        { id: 3, name: "andres", email: "andres@myfpschool.com" },
      ],
    }
  }

  handleNewUser(event) {
    // Deshabilito el refresh
    event.preventDefault();

    // Creo el nuevo usuario
    const newUser = {
      id: this.state.users.length,
      name:event.target.name.value,
      email:event.target.email.value,
    }

    // Copio el atributo users y lo modifico
    const auxUsers = JSON.parse(JSON.stringify(this.state.users));
    auxUsers.push(newUser);

    // Vacio los inputs
    event.target.name.value = "";
    event.target.email.value = "";

    // Establezco el users modificado
    this.setState({users:auxUsers});
  }

  render() {
    return (
      <div className="App">
        <h2>Me mola Myfpschool</h2>
        <div>
          <p><strong>Añade usuarios</strong></p>
          <UserList users={this.state.users} />
        </div>
        <UserForm handleClick={(event) => this.handleNewUser(event)} />
      </div>
    );
  }
}

export default App;
