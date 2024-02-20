export default function Poblacion ({ poblacion }) {
  // Calculo el número de personas totales en la población
  const numeroPersonas = poblacion.reduce((acumFila, currentFila) => {
    return acumFila + currentFila.reduce((acum, current) => acum + current.personas, 0)
  }, 0)

  return (
    <div className="poblacion">
      <h3>Población total</h3>
      <p>La población total es de {numeroPersonas} habitantes.</p>
    </div>
  )
}
