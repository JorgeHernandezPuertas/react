import React from 'react';
import { Button } from 'reactstrap';

function Jugar(props){


    return (
        <div className='jugar'>
            <Button color='success' onClick={() => props.crearCampo()} >Jugar</Button>
        </div>
    );
}

export default Jugar;