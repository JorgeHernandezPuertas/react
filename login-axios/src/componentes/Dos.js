import { Input } from 'reactstrap'

export default function Dos ({ texto, handleTextChange }) {

  return (
    <div className="menu-dos">
      <h2>Menú dos</h2>
      <Input type='textarea' name='texto' value={texto} onChange={handleTextChange} />
    </div>
  )
}