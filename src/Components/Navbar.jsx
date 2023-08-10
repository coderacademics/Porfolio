import React, { useState } from "react";
import '../CSS Styling/Navbar.css';
import { HashLink as Link } from 'react-router-hash-link';
import Logo from '../pictures/logo.png'
function Navbar() {
    const [navbarClass, setNavbarClass] = useState('navbar-container');
    window.addEventListener("scroll", () => {
        if (window.scrollY === 0)
            setNavbarClass('navbar-container');
        else
            setNavbarClass('navbar-container scrolled');
    })
    return <>
        <div className={navbarClass}>
            <img src={Logo} height={50} width={120} />
            <div className="nav-items-container">
                <li><Link smooth to="#" className="nav-items">HOME</Link></li>
                <li ><Link smooth to="#aboutme" className="nav-items">ABOUT</Link></li>
                <li><Link smooth to="#skills" className="nav-items">SKILLS</Link></li>
                <li ><Link smooth to="#services" className="nav-items">SERVICES</Link></li>
                <li ><Link smooth to="#resume" className="nav-items">RESUME</Link></li>
                <li ><Link smooth to="#contactme" className="nav-items">CONTACT</Link></li>
            </div>
            <Link smooth to="#contactme" style={{ textDecoration: "none", color: "#fff" }}><button className="hire-me-btn">HIRE ME</button></Link>
        </div>
    </>;
};

export default Navbar;