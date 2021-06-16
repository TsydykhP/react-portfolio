import React from 'react';
import { NavLink } from 'react-router-dom';

import logo from '../assets/logo.png';

function Header() {
    return (
        <header>
            <div className="menu">
                <NavLink to="/" exact><img src={logo} /></NavLink>
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

            <nav className="nav">
                <NavLink to="/" exact><img src={logo} /></NavLink>
                <ul>
                    <li><NavLink to="/about">About</NavLink></li>
                    <li><NavLink to="/" exact>Portfolio</NavLink></li>
                    <li><NavLink to="/resume">Resume</NavLink></li>
                </ul>
                <ul>
                    <li><NavLink to="/contact">Contact</NavLink></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header