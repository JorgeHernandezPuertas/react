import {Button} from 'reactstrap';

function SelectorTam(props) {

    const aumentar = "aumentar";
    const disminuir = "disminuir";
    const fila = "fila";
    const columna = "columna";

    return (
        <div className="selectorTam">
            <p>Filas: {props.filas}</p> 
            <Button onClick={() => props.cambiarTam(aumentar, fila)}>+</Button>
            <Button onClick={() => props.cambiarTam(disminuir, fila)}>-</Button>
            <p>Columnas: {props.columnas}</p> 
            <Button onClick={() => props.cambiarTam(aumentar, columna)}>+</Button>
            <Button onClick={() => props.cambiarTam(disminuir, columna)}>-</Button>
        </div>
    );
}


export default SelectorTam;