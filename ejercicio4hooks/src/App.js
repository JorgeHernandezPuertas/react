import React, { useState } from 'react';
import './App.css';

function App() {
  const [users, setUsers] = useState([
    { id: 1, name: "perico", email: "perico@myfpschool.com" },
    { id: 2, name: "juanico", email: "juanico@myfpschool.com" },
    { id: 3, name: "andres", email: "andres@myfpschool.com" },
  ]);

  function handleSubmit(event) {
    event.preventDefault();
    if (event.target.name.value !== "" && event.target.email.value !== ""){
      const nombre = event.target.name.value;
      const email = event.target.email.value;
      const id = users[users.length - 1].id + 1;
      const newUser = {id: id, name: nombre, email:email};
  
      const usersAux = JSON.parse(JSON.stringify(users));
      usersAux.push(newUser);
  
      setUsers(usersAux);
    }
  }


  return (
    <div className='App'>
      <h3>Añade usuarios</h3>
      <UserList users={users} />
      <UserForm  handleSubmit={handleSubmit} />
    </div>
  );
}

function UserList({ users }) {
  const lista = [];
  users.map(user => {
    const userFormated = <p>{user.name} -  {user.email}</p>;
    lista.push(userFormated);
    return user;
  })

  return (
    <div className='userList'>
      {lista}
    </div>
  );
}

function UserForm({handleSubmit}) {
  return (
    <form onSubmit={handleSubmit} className='form' method='post'>
      <input type='text' placeholder='Nombre' name='name' />
      <input type='email' placeholder='Email' name='email' />
      <button>Guardar</button>
    </form>
  );
}

export default App;
