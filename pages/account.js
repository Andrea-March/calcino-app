import React, {useState} from "react";
import Layout from "../components/layout/Layout";
import AuthWrapper from "../components/auth-wrapper/authWrapper";
import AccountPage from "../components/account/Account";


export default function Account(){


    return(
        <Layout>
            <AuthWrapper />
        <div>
            <AccountPage />
        </div>
        </Layout>
    )
}