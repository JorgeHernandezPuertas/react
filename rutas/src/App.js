import './App.css'
import { Outlet, Link } from 'react-router-dom'

function App () {
  return (
    <div className="App">
      <h1>Elemento App</h1>
      <Outlet />
      <Link />
    </div>
  )
}

export default App
