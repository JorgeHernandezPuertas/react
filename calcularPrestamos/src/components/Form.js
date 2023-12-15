import { Button } from 'reactstrap';
import FormField from './FormField';
import FormTimeField from './FormTimeField';

function Form({handler}){
    return (
        <form onSubmit={handler} className='form' >
            <h3>Calcula tu préstamo</h3>
            <FormField nombre='cantidad' tipo='text' campo='Cantidad' />
            <FormField nombre='interes' tipo='text' campo='interes' />
            <FormTimeField />
            <Button color='danger' >Calcular</Button>
        </form>
    );
}

export default Form;