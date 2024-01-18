export default function ListaDeseos ({ deseos }) {
  const vistaDeseos = deseos.map(d => <li>{d}</li>)
  return (
    <div className='lista' >
      <h2>Lista de deseos</h2>
      <ol>
       {vistaDeseos}
      </ol>
    </div>
  )
}
