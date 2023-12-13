import Delete from "./Delete";

function Desire({desire, quitar}){
    return (
        <>
        <li>{desire} <Delete quitar={quitar} /></li>
        </>
    );
}

export default Desire;