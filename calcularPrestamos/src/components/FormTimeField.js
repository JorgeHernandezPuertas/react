
function FormTimeField(){
    return(
        <div className="timeField">
            <p>A devolver</p>
            <input name="anios" type="text" id="anios" /> <label for='anios' >Años</label> 
            <input name="meses" type="text" id="meses" /> <label for='meses'>Meses</label>
        </div>
    );
}

export default FormTimeField;