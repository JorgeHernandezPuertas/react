import React from "react";

function UserForm({ handleClick }) {


    return (
        <form onSubmit={handleClick}>
            <input id='name' name="name" type='text' placeholder='Nuevo usuario...' />
            <input id='email' name="email" type='email' placeholder='Email...' />
            <button>Añadir</button>
        </form> 
    );
}

export default UserForm;