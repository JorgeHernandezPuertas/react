import React from 'react';
import { Button } from 'reactstrap';

function Jugar(props){


    return (
        <div className='jugar'>
            <Button color='success' onClick={() => props.iniciarJuego()} >Jugar</Button>
        </div>
    );
}

export default Jugar;