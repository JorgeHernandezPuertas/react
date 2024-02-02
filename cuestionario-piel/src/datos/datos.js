export const TIPOS_PIEL = {
  tipo1: { texto: 'Tu piel es de tipo I', info: 'Muy sensible a la luz solar', puntosMax: 7 },
  tipo2: { texto: 'Tu piel es de tipo II', info: 'Sensible a la luz solar', puntosMax: 21 },
  tipo3: { texto: 'Tu piel es de tipo III', info: 'Sensibilidad normal a la luz solar ', puntosMax: 42 },
  tipo4: { texto: 'Tu piel es de tipo IV', info: 'La piel tiene tolerancia a la luz solar', puntosMax: 68 },
  tipo5: { texto: 'Tu piel es de tipo V', info: 'La piel es oscura. Alta tolerancia', puntosMax: 84 },
  tipo6: { texto: 'Tu piel es de tipo VI', info: 'La piel es negra. Altísima tolerancia', puntosMax: Infinity }
}

export const VALORES = {
  valor1: 0,
  valor2: 2,
  valor3: 4,
  valor4: 8,
  valor5: 10,
  valor6: 12,
  valor7: 16
}

export const PREGUNTAS = [
  {
    pregunta: '¿Cuál es el color natural de su piel cuando no está bronceada?',
    respuestas: [
      {
        texto: 'Rojiza, blanca',
        valor: VALORES.valor1
      },
      {
        texto: 'Blanca-beige',
        valor: VALORES.valor2
      },
      {
        texto: 'Beige',
        valor: VALORES.valor3
      },
      {
        texto: 'Marrón clara',
        valor: VALORES.valor4
      },
      {
        texto: 'Marrón',
        valor: VALORES.valor6
      },
      {
        texto: 'Negra',
        valor: VALORES.valor7
      }
    ]
  },
  {
    pregunta: '¿De qué color natural es su pelo?',
    respuestas: [
      {
        texto: 'Pelirrojo, rubio claro',
        valor: VALORES.valor1
      },
      {
        texto: 'Rubio, castaño claro',
        valor: VALORES.valor2
      },
      {
        texto: 'Castaño',
        valor: VALORES.valor3
      },
      {
        texto: 'Castaño oscuro',
        valor: VALORES.valor4
      },
      {
        texto: 'Castaño oscuro-negro',
        valor: VALORES.valor6
      },
      {
        texto: 'Negro',
        valor: VALORES.valor7
      }
    ]
  },
  {
    pregunta: '¿De qué color tiene los ojos?',
    respuestas: [
      {
        texto: 'Azul claro, verde claro, gris claro',
        valor: VALORES.valor1
      },
      {
        texto: 'Azules, verdes, grises',
        valor: VALORES.valor2
      },
      {
        texto: 'Grises, marrón claro',
        valor: VALORES.valor3
      },
      {
        texto: 'Marrones',
        valor: VALORES.valor4
      },
      {
        texto: 'Marrón oscuro',
        valor: VALORES.valor6
      },
      {
        texto: 'Negros',
        valor: VALORES.valor7
      }
    ]
  },
  {
    pregunta: '¿Cuántas pecas tiene de manera natural en el cuerpo cuando no está bronceado?',
    respuestas: [
      {
        texto: 'Muchas',
        valor: VALORES.valor1
      },
      {
        texto: 'Algunas',
        valor: VALORES.valor2
      },
      {
        texto: 'Unas cuantas',
        valor: VALORES.valor3
      },
      {
        texto: 'Ninguna',
        valor: VALORES.valor4
      }
    ]
  },
  {
    pregunta: '¿De qué color natural es su pelo?',
    respuestas: [
      {
        texto: 'Pelirrojo, rubio claro',
        valor: VALORES.valor1
      },
      {
        texto: 'Rubio, castaño claro',
        valor: VALORES.valor2
      },
      {
        texto: 'Castaño',
        valor: VALORES.valor3
      },
      {
        texto: 'Castaño oscuro',
        valor: VALORES.valor4
      },
      {
        texto: 'Castaño oscuro-negro',
        valor: VALORES.valor6
      },
      {
        texto: 'Negro',
        valor: VALORES.valor7
      }
    ]
  },
  {
    pregunta: '¿Qué categoría describe mejor su herencia genética?',
    respuestas: [
      {
        texto: 'Raza blanca de piel muy blanca',
        valor: VALORES.valor1
      },
      {
        texto: 'Raza blanca de piel clara',
        valor: VALORES.valor2
      },
      {
        texto: 'Raza blanca piel morena (Mediterráneo)',
        valor: VALORES.valor3
      },
      {
        texto: 'Oriente Medio, hindú, asiático, hispano-americano',
        valor: VALORES.valor4
      },
      {
        texto: 'Aborigen, africano, afroamericano',
        valor: VALORES.valor6
      }
    ]
  },
  {
    pregunta: '¿Qué categoría describe mejor su potencial de QUEMADURA exponiéndose al sol una hora en verano?',
    respuestas: [
      {
        texto: 'Siempre se quema y no se broncea nunca',
        valor: VALORES.valor1
      },
      {
        texto: 'Habitualmente se quema, pero puede broncearse ligeramente',
        valor: VALORES.valor2
      },
      {
        texto: 'Se quema ocasionalmente, pero se broncea moderadamente',
        valor: VALORES.valor3
      },
      {
        texto: 'Nunca se quema y se broncea con facilidad',
        valor: VALORES.valor4
      },
      {
        texto: 'Raramente se quema y se broncea profundamente',
        valor: VALORES.valor5
      },
      {
        texto: 'Nunca se quema',
        valor: VALORES.valor6
      }
    ]
  },
  {
    pregunta: '¿Qué categoría describe mejor su potencial de BRONCEADO?',
    respuestas: [
      {
        texto: 'Nunca se broncea',
        valor: VALORES.valor1
      },
      {
        texto: 'Se puede broncear ligeramente',
        valor: VALORES.valor2
      },
      {
        texto: 'Se puede broncear moderadamente',
        valor: VALORES.valor3
      },
      {
        texto: 'Se puede broncear profundamente',
        valor: VALORES.valor4
      }
    ]
  }
]
