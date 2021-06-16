import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../assets/logo.png';

function Footer() {
    return (
        <footer>
            <div className="wrap-b">
                <NavLink to="/" exact><img src={logo} /></NavLink>
                <NavLink to="/" exact>Tsydykh Pokhodiev</NavLink>
                <ul>
                    <li><NavLink to="/contact">Contact</NavLink></li>
                </ul>
            </div>
        </footer>
    )
}

export default Footer
