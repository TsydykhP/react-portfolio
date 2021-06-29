import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../assets/logo.png';

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-line"></div>
            <div className="wrap-nav">
                <NavLink className="link" to="/" exact><img src={logo} alt="logo" /></NavLink>
                <NavLink className="link name" to="/" exact>© Tsydykh Pokhodiev, 2021</NavLink>
                <NavLink className="link contact-link" to="/contact">Contact</NavLink>
            </div>
        </footer>
    )
}

export default Footer
