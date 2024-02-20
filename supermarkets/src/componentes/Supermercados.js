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

  const mostrarSupers = <ol>
    {
      supers.map(s => {
        return <li key={crypto.randomUUID()}>{`El supermercado en  x=${s.posicion.x + 1} e y=${s.posicion.y + 1} tiene ${s.clientes} clientes`}</li>
      })
    }
  </ol>

  return (
    <div className="supermercados">
      <h3>Supermercados</h3>
      {mostrarSupers}
    </div>
  )
}
