
function DesireForm({handleClick}){
    return (
        <form onSubmit={handleClick}>
            <input type="text" name="desire" placeholder="Pon tu deseo..." />
        </form>
    );
}

export default DesireForm;