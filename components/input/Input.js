

export default function Input(
    {   type='text',
        label='',
        placeholder='',
        required=false,
        onChange=()=>{},
        defaultValue,
        disabled=false}
    ){
    return(
        <div className="input-container">
            <input
                type={type}
                placeholder={placeholder}
                required={required}
                defaultValue={defaultValue}
                onChange={(e)=>{onChange(e.target.value)}}
                disabled={disabled}
            />
            <label>{label}</label>
        </div>
    )
}