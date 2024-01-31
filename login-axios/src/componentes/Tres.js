import { Input } from 'reactstrap'

export default function Tres ({ texto, handleTextChange }) {

  return (
    <div className="menu-tres">
      <h2>Menú tres</h2>
      <Input type='textarea' name='texto' value={texto} onChange={handleTextChange} />
    </div>
  )
}