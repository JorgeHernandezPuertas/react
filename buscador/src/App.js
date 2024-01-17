import './App.css'
import { useState } from 'react'
import Buscador from './components/Buscador.js'
import Resultado from './components/Resultado.js'

function App () {
  const [pueblos] = useState([
    'Estepona', 'Sabinillas', 'San pedro', 'Cancelada', 'Ojen', 'Malaga', 'Marbella', 'Fuengirola', 'Los Barrios', 'Mijas', 'Fuenlabrada', 'Motril'
  ])
  const [busqueda, setBusqueda] = useState('')

  // Establezco la busqueda cada vez que se cambia el buscador
  function handleChange (event) {
    const busqueda = event.target.value
    setBusqueda(busqueda)
  }

  return (
    <div className="App">
      <Buscador handleChange={handleChange} />
      {busqueda !== '' && <Resultado busqueda={busqueda} pueblos={pueblos} />}
    </div>
  )
}

export default App
