export default function Supermercados ({ poblacion }) {
  // Calculo el número de personas totales en la población
  const supers = []

  poblacion.map(fila => {
    fila.map(col => {
      if (col.supermarket.abierto) {
        supers.push(col.supermarket)
      }
      return col
    })
    return fila
  })

  let mostrarSupers = <p>No hay supermercados en este momento</p>

  if (supers.length !== 0) {
    mostrarSupers = <ul>
      {
        supers.map((s, index) => {
          const clientes = Math.ceil(s.clientes * 100) / 100
          return <li key={crypto.randomUUID()}>{index + 1}. &emsp;{`El supermercado con posición (${s.posicion.x + 1}, ${s.posicion.y + 1}) tiene ${clientes} clientes`}</li>
        })
      }
    </ul>
  }

  return (
    <div className="supermercados">
      <h3>Supermercados</h3>
      {mostrarSupers}
    </div>
  )
}
