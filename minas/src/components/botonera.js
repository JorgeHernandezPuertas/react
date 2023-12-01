import React from 'react';
import { Button } from 'reactstrap';
import './botonera.css';

function Botonera(props) {
    const izquierda = "izquierda";
    const derecha = "derecha";
    const abajo = "abajo";
    const arriba = "arriba";

    return (
        <div className='botonera'>
            <div>
                <Button color='primary' onClick={() => props.mover(arriba)} >⇧</Button>
            </div>
            <div className='doble'>
                <Button color='primary' onClick={() => props.mover(izquierda)}>⇦</Button>
                <Button color='primary' onClick={() => props.mover(derecha)}>⇨</Button>
            </div>
            <div>
                <Button color='primary' onClick={() => props.mover(abajo)}>⇩</Button>
            </div>

        </div>
    );
}

export default Botonera;