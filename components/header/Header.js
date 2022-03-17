import React, {useState} from "react";
import Link from "next/link";
import {placeholder} from '../../public/img_placeholder.jpg'
import Image from "next/image";
export default function Header() {

    const [click, setClick] = useState(false);

    const handleClick = () => {
        setClick(!click);
    };
    const closeMobileMenu = () => {
        setClick(false);
    };

    return(
            <div className="navbar-container">
                <nav className="navbar">
                    <Link href="/" className="navbar-logo" onClick={closeMobileMenu}>
                        <Image className={"logo-img"} src="/img_placeholder.jpg" width={50} height={50} alt=""/>
                    </Link>
                    <p className="logo-name">Who Is Next?</p>
                    <div className="menu-icon" onClick={handleClick}>
                        <i className={click ? "fa fa-times" : "fa fa-bars"} />
                    </div>
                    <ul className={click ? "nav-menu active" : "nav-menu"}>
                        <li className="nav-item">
                            <a href="/" className="nav-links" onClick={closeMobileMenu}>
                                Home
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="/account" className="nav-links" onClick={closeMobileMenu}>
                                Account
                            </a>
                        </li>
                        <li className="nav-item">
                            <a target="_blank" rel="noreferrer" href="https://www.buymeacoffee.com/" className="nav-links" onClick={closeMobileMenu}>Buy Us a Coffee</a>
                        </li>
                    </ul>
                </nav>
            </div>
    )
}