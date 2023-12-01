import React from 'react';
import './campo.css';
import { Button } from 'reactstrap';

function Campo(props) {
    const campoMinas = props.campo;
    const posicion = props.posicion;

    const lista = []; // Guardo la presentación de lo que voy a imprimir
    campoMinas.map((e, indexi) => { // Creo la presentación en función del campo de minas
        e.map((b, indexj)=> {
            if (indexi === posicion.y && indexj === posicion.x){ // Si es la posición
                lista.push(<Button outline>{b}</Button>);
            } else if (b === 0){
                lista.push(<Button color='danger'>{b}</Button>);
            } else {
                lista.push(<Button>1</Button>);
            }
        }) 
    })
    


    return (
        <div className='campo'>
            {lista}
        </div>
    );
}

export default Campo;