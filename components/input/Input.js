

export default function Input({type, label, placeholder, required, onChange}){
    return(
        <div className="input-container">
            <input type={type} placeholder={placeholder} required={required} onChange={(e)=>{onChange(e.target.value)}}/>
            <label>{label}</label>
        </div>
    )
}