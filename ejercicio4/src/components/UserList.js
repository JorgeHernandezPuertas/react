import React from "react";
import User from "./User";

function UserList({users}) {

    const usersList = users.map(u => <li><User key={u.id} name={u.name} email={u.email} /></li>);

    return (
        <ul>
            {usersList}
        </ul>
    );
}



export default UserList;