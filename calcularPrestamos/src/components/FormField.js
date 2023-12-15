
function FormField({campo, nombre, tipo}) {
    return (
        <div>
            <label for={nombre} >{campo}</label> <input type={tipo} name={nombre} id={nombre} />
        </div>
    );
}

export default FormField;