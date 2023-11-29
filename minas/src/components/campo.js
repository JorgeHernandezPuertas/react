import React from 'react';
import { Button } from 'reactstrap';
import './campo.css';

function Campo(props) {
    const filas = props.filas;
    const columnas = props.columnas;
    const posicion = props.pos;
    const campoMinas = Array(filas).fill(Array(columnas).fill(<Button>1</Button>));
    campoMinas[posicion.x][posicion.y] = <Button outline >1</Button>;



    return (
        <div className='campo'>
            <p>Filas: {filas}, Columnas: {columnas} </p>
            {campoMinas}
        </div>
    );
}

export default Campo;