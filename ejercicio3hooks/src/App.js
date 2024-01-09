import './App.css';
import React, {useState} from "react";

function App() {
  const [deseos, setDeseos] = useState(["gambas", "jamón"]);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (event.target.deseo.value !== ""){
      const nuevoDeseo = event.target.deseo.value;

      const deseosAux = JSON.parse(JSON.stringify(deseos));
      deseosAux.push(nuevoDeseo);

      setDeseos(deseosAux);
    }
  }

  return (
    <div className="App">
      <h1>Lista de deseos.</h1>
      <h3>Añade tu regalo favorito</h3>
      <ListaDeseos deseos={deseos} />
      <FormDeseo handleSubmit={handleSubmit} />
    </div>
  );
}

function ListaDeseos({deseos}){
  let textoDeseos = "";
  deseos.map(deseo => {
    textoDeseos += deseo + " - ";
    return deseo;
  })
  textoDeseos = textoDeseos.slice(0, -3);

  return(
    <div className="lista-deseos">
      {textoDeseos}
    </div>
  );
}

function FormDeseo({handleSubmit}){
  return(
    <form className='form' onSubmit={handleSubmit} method='post'>
      <input type='text' name='deseo' />
    </form>
  );
}

export default App;
