import './App.css'
import AnadirDeseo from './components/AnadirDeseo'
import Buscador from './components/Buscador'
import ListaDeseos from './components/ListaDeseos'
import { /* useEffect, */ useState } from 'react'

function App () {
  const [deseos, setDeseos] = useState(['Jamon', 'Gambas'])
  const [busqueda, setBusqueda] = useState('')
  // const [listaFiltrada, setListaFiltrada] = useState([])

  function handleClick (deseoBorrar) {
    const auxDeseos = deseos.filter((d) => d !== deseoBorrar)
    setDeseos(auxDeseos)
  }

  /*
  useEffect(() => {
    if (busqueda !== '') {
      const aux = deseos.filter((d) => d.toLowerCase().startsWith(busqueda.toLowerCase())).map((d) => <li>{d} <button onClick={() => handleClick(d)}>Borrar</button> </li>)
      setListaFiltrada(aux)
    }
  }, [busqueda, deseos])
*/
  function handleSubmit (event) {
    event.preventDefault()

    const nuevoDeseo = event.target.deseo.value
    const deseosAux = deseos.slice()
    deseosAux.push(nuevoDeseo)

    event.target.deseo.value = ''
    setDeseos(deseosAux)
  }

  function handleChange (event) {
    const busquedaNueva = event.target.value
    setBusqueda(busquedaNueva)
  }

  return (
    <div className="App">
      <ListaDeseos deseos={deseos} />
      <AnadirDeseo handleSubmit={handleSubmit} />
      <Buscador handleChange={handleChange} deseos={deseos} busqueda={busqueda} handleClick={(e) => handleClick(e)} />
    </div>
  )
}

export default App
