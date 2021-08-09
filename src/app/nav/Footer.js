import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../assets/logo.svg';

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-line"></div>
            <div className="wrap-nav">
                <NavLink className="link" to="/" exact><img src={logo} alt="logo" width="64" height="64" /></NavLink>
                <NavLink className="link name" to="/" exact>© Tsydykh Pokhodiev, 2021</NavLink>
                <a href="https://bit.ly/3Cl3QeE" className="link contact-link">Resume</a>
            </div>
        </footer>
    )
}

export default Footer
