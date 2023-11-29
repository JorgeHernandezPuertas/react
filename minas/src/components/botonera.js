import React from 'react';
import { Button } from 'reactstrap';
import './botonera.css';

function Botonera(props) {

    return (
        <div className='botonera'>
            <div>
                <Button color='primary' >⇧</Button>
            </div>
            <div className='doble'>
                <Button color='primary'>⇦</Button>
                <Button color='primary'>⇨</Button>
            </div>
            <div>
                <Button color='primary'>⇩</Button>
            </div>

        </div>
    );
}

export default Botonera;