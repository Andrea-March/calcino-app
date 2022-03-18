import React from "react";

export default function Button({text, onClick}){
    return(
        <button className="btn" onClick={()=>{onClick()}}>
            {text}
        </button>
    )
}