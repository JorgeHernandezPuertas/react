import React from 'react';
import './campo.css';
import { Button } from 'reactstrap';

function Campo(props) {
    const campoMinas = props.campo;
    const posicion = props.posicion;

    const lista = []; // Guardo la presentación de lo que voy a imprimir
    campoMinas.map((e, indexi) => { // Creo la presentación en función del campo de minas
        e.map((b, indexj) => {
            if (indexi === posicion.y && indexj === posicion.x){
                switch (b) {
                    case 0:
                        lista.push(<Button color='danger'>X</Button>);
                        break;
                    case 1:
                        lista.push(<Button color='warning'>X</Button>);
                        break;
                    case 2:
                        lista.push(<Button color='info'>X</Button>);
                        break;
                    case 3:
                        lista.push(<Button color='primary'>X</Button>);
                        break;
                    case 4:
                        lista.push(<Button color='secondary'>X</Button>);
                        break;
                }
            } else {
                lista.push(<Button color='secondary'>{b}</Button>);
            }
        })
        lista.push(<br />);
    })



    return (
        <div className='campo'>
            {lista}
        </div>
    );
}

export default Campo;