export default function Buscador ({ deseos, busqueda, handleChange, handleClick }) {
  // Lo de abajo es si pasas como props tanto deseos como busqueda
  const listaFiltrada = deseos.filter((d) => d.toLowerCase().startsWith(busqueda.toLowerCase())).map((d) => <li>{d} - <button onClick={() => handleClick(d)} >Borrar</button></li>)

  return (
    <div className="buscador" >
      <h2>Buscador</h2>
      <input onChange={handleChange} type="text" name="busqueda" placeholder="Busca tu deseo..." />
      <ol>
        {listaFiltrada}
      </ol>
    </div>
  )
}
