export const POBLACION =
  [
    [0, 5, 4, 2, 9, 8, 0, 8, 8],
    [1, 7, 21, 23, 44, 5, 3, 4, 0],
    [2, 6, 32, 22, 33, 8, 4, 2, 8],
    [1, 2, 43, 4, 56, 65, 34, 11, 8],
    [2, 22, 32, 3, 42, 62, 43, 21, 0],
    [2, 2, 23, 34, 64, 24, 42, 15, 7],
    [0, 2, 36, 43, 61, 26, 64, 12, 0],
    [1, 2, 15, 43, 34, 2, 12, 2, 3],
    [1, 0, 12, 3, 0, 0, 21, 2, 2]
  ]

// Me hago mi poblacion con el formato que quiero
export const POBLACION2 = POBLACION.map((fila) => {
  const filaAux = fila.map((col) => {
    const colAux = { personas: col, supermarket: { abierto: false, posicion: { x: -1, y: -1 }, clientes: 0 } }
    return colAux
  })
  return filaAux
})
