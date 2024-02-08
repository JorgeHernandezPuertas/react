export default function Porcentajes ({ estadisticasTipos, modal }) {
  const clasesBarra = modal ? 'aparecer-barra barra' : 'barra'

  return (
    <>
      <h4>Porcentajes</h4>
      <ul>
        {
          estadisticasTipos.map((e, indice) => (<li key={ crypto.randomUUID() }><p>{ `Tipo de piel ${indice + 1}` }</p><strong className={ `tipo${indice + 1}` }>{ `${e} %` }</strong> </li>))
        }
      </ul>
      <div className={ clasesBarra }>
        {
          estadisticasTipos.map((e, indice) => {
            const clases = `tipo${indice + 1}`
            const longitud = `${e}%`
            return <div key={ crypto.randomUUID() } title={ `Tipo de piel ${indice + 1}` } className={ clases } style={ { width: longitud } } ></div>
          })
        }
      </div>
    </>
  )
}
