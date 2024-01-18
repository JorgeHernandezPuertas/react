export default function AnadirDeseo ({ handleSubmit }) {
  return (
    <form className="form" onSubmit={handleSubmit} >
      <input type="text" name="deseo" placeholder="Añade tu deseo..." />
    </form>
  )
}
