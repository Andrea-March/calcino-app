import React from "react";
import Layout from "../components/layout/Layout";
import AuthWrapper from "../components/auth-wrapper/authWrapper";


export default function Account(){
    return(
        <Layout>
            <AuthWrapper />
        <div>
            ACCOUNT PAGE
        </div>
        </Layout>
    )
}