import React, {useEffect, useState} from "react";
import Input from "../input/Input";
import RadioInput from "../input/RadioInput";


export default function AccountPage(){
    const user = typeof window != 'undefined' ? JSON.parse(localStorage.getItem('user')) : {'username': ''}

    const[userName, setUsername] = useState(user ? user.username: '')

    return(
        <div>
            <div style={{marginBottom:"20%"}}>
                {user?.takenToday &&
                    <div className="d-flex flex-column align-center justify-center">
                        <p>Today Status:</p>
                        <i className="fa fa-check fa-3x" style={{color: "green"}} />
                        <p>You have a partner for today!</p>
                    </div>

                }{
                    !user.takenToday &&
                    <div className="d-flex flex-column align-center justify-center">
                        <p>Today Status:</p>
                        <i className="fa fa-times fa-3x"  style={{color: "red"}}/>
                        <p>You don t have a partner for today!</p>
                        </div>

            }

            </div>

            <Input defaultValue={user.username} placeholder={'username'} label={'username'} onChange={setUsername}/>
            <RadioInput defaultValue={user.userType}/>
        </div>
    )
}