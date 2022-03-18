import {useRouter} from "next/router";
import React, {useState} from "react";
import fetcher from "../../service/fetcher";
import Button from "../button/Button";
import Input from "../input/Input";

export default function LoginPage(){
    const router = useRouter()
    const [user, setUser] = useState("")
    const [password, setPassword] = useState("")

    if(typeof window != 'undefined' && localStorage.getItem('user')){
        router.push("/")
    }

    const handleLogin = () => {
        fetcher.post('/api/login', {username: user, password: password})
            .then((user)=>{
                if(user){
                    localStorage.setItem('user', JSON.stringify(user))
                    router.push('/')
                }
            })
    }
    return (
        <div className='login-container d-flex align-center justify-center'>
            <div className='login-form'>
                <h3 className='login-title'>Welcome Back!</h3>
                <div className='d-flex flex-column align-center justify-center w-100 h-100'>
                    <Input type="text" label="username" required={true} onChange={setUser}/>
                    <Input type="password" label="password" required={true} onChange={setPassword}/>
                    <Button text={'Login'} onClick={handleLogin} />
                </div>
            </div>


        </div>
    )
}