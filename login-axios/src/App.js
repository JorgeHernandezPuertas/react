import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import AppLogin from './componentes/AppLogin'
import Menu from './componentes/Menu'
import { Component } from 'react';
import { PHPLOGIN}  from './componentes/Datos';
import axios from 'axios';
import React from 'react'

class App extends Component {
  constructor(props){
    super(props)
    this.state={
      menuItem: "UNO",
      logged: false,
      texto: '',
    }

   this.changeText = this.changeText.bind(this)
  }
  
  changeMenu(item){
    this.setState({ menuItem:item })
  }

  changeText(e) {
    this.setState({ texto: e.target.value })
  }

  userLogin(telefono,password){
    /*
    if (telefono=="Myfpschool" && password=="2023"){
      this.setState({logged:true})
    }
    */
    axios.post(PHPLOGIN,JSON.stringify({
      telefono:telefono,
      password:password
    }))
    .then(res => {
      console.log(res.data.usuario);
      if ( res.data.usuario !== undefined){
        this.setState({logged:true});
        return true
      } else {
        return false
      }
    })
  }

  render(){
    let obj=<><Menu menuItem={this.state.menuItem} changeMenu={(item)=>this.changeMenu(item)} texto={this.state.texto} handleTextChange={this.changeText} /></>
    if (!this.state.logged){
      obj=<AppLogin userLogin={(telefono, password) => this.userLogin(telefono, password)}/>
    }
    return (
      <div className="App">
        {obj}
      </div>
    );
  }
}

export default App;
