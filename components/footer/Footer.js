import React from "react";

import Image from "next/image";


export default function Footer(){
    return(
        <div className={"footer"}>

        <a
            href="https://instal.com"
            target="_blank"
            rel="noopener noreferrer"
        >
            Powered by Instal {' '}

                <img src="/instal.jpg" alt="Vercel Logo" width={35} height={35} />

        </a>
        </div>
    )
}