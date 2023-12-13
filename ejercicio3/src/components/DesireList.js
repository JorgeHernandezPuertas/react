import Desire from "./Desire";

function DesireList({ desires, quitar }) {

    const list = desires.map((d, index) => <Desire desire={d} quitar={() => quitar(index)} />);

    return (
        <ul>
            {list}
        </ul>
    );
}

export default DesireList;