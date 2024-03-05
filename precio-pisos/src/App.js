import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { useState, useEffect } from 'react'
import { create, all } from 'mathjs'
import Formulario from './components/Formulario'

function App () {
  const [vector, setVector] = useState()
  const [math] = useState(create(all, {}))
  const [datosUsuario] = useState([{ metros: 0 }, { habitaciones: 0 }, { baños: 0 }, { vista: 0 }, { garaje: 0 }, { trastero: 0 }, { año: 0 }, { estado: 0 }, { piscina: 0 }])
  const [precio] = useState(0)

  console.log(vector, datosUsuario, precio)

  // Calculo el vector de regresión multivariable
  useEffect(() => {
    setVector(math.matrix([1, 2, 3]))
  }, [math])

  return (
    <div className="App">
      <Formulario datosUsuario={datosUsuario} />
    </div>
  )
}

export default App
