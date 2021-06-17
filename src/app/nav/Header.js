import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../assets/logo.png';

function Header() {
    return (
        <header className="header">
            <div className="menu">
                <NavLink to="/" exact><img src={logo} alt="logo" /></NavLink>
                <input type="checkbox" className="toggler" />
                <div className="burger"><div></div></div>
                <div className="menu-nav">
                    <div>
                        <div>
                            <ul>
                                <li><NavLink to="/about">About</NavLink></li>
                                <li><NavLink to="/" exact>Portfolio</NavLink></li>
                                <li><NavLink to="/resume">Resume</NavLink></li>
                                <li><NavLink to="/contact">Contact</NavLink></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <nav className="wrap-nav">
                <div>
                    <NavLink to="/" exact><img src={logo} alt="logo" /></NavLink>
                    <NavLink className="link" to="/about">About</NavLink>
                    <NavLink className="link" to="/" exact>Portfolio</NavLink>
                    <NavLink className="link" to="/resume">Resume</NavLink>
                    <NavLink className="link" to="/contact">Contact</NavLink>
                </div>
                <div>
                    <i class="fab fa-linkedin"></i>
                    <i class="fab fa-instagram-square"></i>
                    <i class="fab fa-github-square"></i>
                </div>
            </nav>
        </header>
    )
}

export default Header