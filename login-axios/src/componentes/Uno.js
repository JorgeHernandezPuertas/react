import { Input, Form } from 'reactstrap'

export default function Uno ({ texto, handleTextChange }) {

  return (
    <div className="menu-uno">
      <h2>Menú uno</h2>
      <Form>
      <Input type='textarea' name='texto' value={texto} onChange={handleTextChange} />
      </Form>
    </div>
  )
}