import './ganador.css';

function Ganador(props) {
    const mensaje = props.ganado ? "¡Has ganado!":"¡Has perdido!";
    const ganado = props.ganado;

    return (
        <div className="ganador" >
            {ganado && <h1 color='red'>{mensaje}</h1>}
            {!ganado && <h1 color='green'>{mensaje}</h1>}
        </div>
    );
}

export default Ganador;