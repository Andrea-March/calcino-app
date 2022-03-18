

export default function RadioInput(
    {   type='text',
        label='',
        placeholder='',
        required=false,
        onChange=()=>{},
        defaultValue='',
        disabled=false}
){
    if(typeof document != 'undefined' && document.getElementById(defaultValue)){
        document.getElementById(defaultValue).checked = true
    }
    return(
        <div className="radio-container">
            <input id="trascinatore" type="radio" name="type-of-player" value="trascinatore" disabled={disabled} />
            <label className="label-card trascinatore" htmlFor="trascinatore">Trascinatore</label>
            <input id="fappassare" type="radio" name="type-of-player" value="fappassare" disabled={disabled}/>
            <label className="label-card fappassare" htmlFor="fappassare">Fappassare</label>
        </div>
    )
}