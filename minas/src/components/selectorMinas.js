import React from 'react';
import { Button } from 'reactstrap';
import './selectorMinas.css';

function SelectorMinas(props) {

    return (
        <div className='selectorMinas'>
            <p>minas: {props.numMinas}</p>
            <div>
                <Button onClick={() => props.aumentar()}>+</Button>
                <Button onClick={() => props.disminuir()}>-</Button>
            </div>
        </div>
    );
}

export default SelectorMinas;