export default function Resultado ({ busqueda, pueblos }) {
  // Filtro los pueblos
  let filtrados = pueblos.filter((p) => busqueda !== '' && p.toLowerCase().startsWith(busqueda.toLowerCase()))
  if (filtrados.length > 1) filtrados = filtrados.reduce((p1, p2) => `${p1} - ${p2}`)

  return (
      <div className="resultado">
        <h3>Resultados</h3>
        {filtrados}
      </div>
  )
}
