import './ganador.css';

function Ganador(props) {
    const mensaje = props.ganado ? "¡Has ganado!":"¡Has perdido!";

    return (
        <div className="ganador" >
            <h1>{mensaje}</h1>
        </div>
    );
}

export default Ganador;