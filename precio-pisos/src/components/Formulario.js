import { Button, Form, FormGroup, Input, Label } from 'reactstrap'

export default function Formulario ({ establecerDatos }) {
  const ANIO_MAX = (new Date()).getFullYear()

  const enviar = (e) => {
    e.preventDefault()
    const form = e.target
    const vistas = form.vistas.checked ? 1 : 0
    const garaje = form.garaje.checked ? 1 : 0
    const trastero = form.trastero.checked ? 1 : 0
    const piscina = form.piscina.checked ? 1 : 0
    const datos = [form.metros.value, form.habitaciones.value, form.banios.value, vistas, garaje, trastero, form.anio.value, form.estado.value, piscina]
    establecerDatos(datos)
  }

  return (
    <div className="formulario">
      <h2>Datos de la vivienda</h2>
      <Form onSubmit={ enviar }>
        <FormGroup>
          <Label for='metros'>
            Metros
          </Label>
          <Input
            id='metros'
            name='metros'
            placeholder='Metros de la vivienda...'
            type="number"
            min={ 1 }
            required
          />
        </FormGroup >
        <FormGroup>
          <Label for='habitaciones'>
            Habitaciones
          </Label>
          <Input
            id='habitaciones'
            name='habitaciones'
            placeholder='Habitaciones de la vivienda...'
            type="number"
            min={ 1 }
            required
          />
        </FormGroup >
        <FormGroup>
          <Label for='banios'>
            Baños
          </Label>
          <Input
            id='banios'
            name='banios'
            placeholder='Baños de la vivienda...'
            type="number"
            min={ 1 }
            required
          />
        </FormGroup >
        <FormGroup>
          <Label for='vistas'>
            ¿Tiene vistas al mar?
          </Label>
          <Input
            id='vistas'
            name='vistas'
            type="checkbox"
          />
        </FormGroup >
        <FormGroup>
          <Label for='garaje'>
            ¿Tiene garaje?
          </Label>
          <Input
            id='garaje'
            name='garaje'
            type="checkbox"
          />
        </FormGroup >
        <FormGroup>
          <Label for='trastero'>
            ¿Tiene trastero?
          </Label>
          <Input
            id='trastero'
            name='trastero'
            type="checkbox"
          />
        </FormGroup >
        <FormGroup>
          <Label for='anio'>
            Año de construcción
          </Label>
          <Input
            id='anio'
            name='anio'
            placeholder='Año de la vivienda...'
            type="number"
            max={ ANIO_MAX }
            min={ 1800 }
            required
          />
        </FormGroup >
        <FormGroup>
          <Label for='estado'>
            Estado actual de la vivienda (del 1 al 5)
          </Label>
          <Input
            id='estado'
            name='estado'
            placeholder='Estado de la vivienda...'
            type="number"
            min={ 1 }
            max={ 5 }
            required
          />
        </FormGroup >
        <FormGroup>
          <Label for='piscina'>
            ¿Tiene piscina?
          </Label>
          <Input
            id='piscina'
            name='piscina'
            type="checkbox"
          />
        </FormGroup >
        <Button color='primary' >Calcular</Button>
      </Form>

    </div>
  )
}
