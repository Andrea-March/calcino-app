import React, {useState} from "react";
import fetcher from "../service/fetcher";
import {useRouter} from "next/router";
import LoginPage from "../components/login/Login";


export default function Login(){
    return (
        <LoginPage />
    )
}