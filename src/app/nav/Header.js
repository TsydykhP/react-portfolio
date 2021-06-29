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
                                <li><NavLink to="/" exact>About</NavLink></li>
                                <li><NavLink to="/portfolio">Portfolio</NavLink></li>
                                <li><NavLink to="/resume">Resume</NavLink></li>
                                <div className="social-links">
                                    <ul>
                                        <li><a href="https://www.linkedin.com/in/tsydykh-pokhodiev/"><i className="fa fa-linkedin"></i></a></li>
                                        <li><a href="https://www.youtube.com/channel/UCqwE-YdX12zQHoWGKZE--AA"><i className="fa fa-youtube"></i></a></li>
                                        <li><a href="https://www.instagram.com/tsydykh_pokhodiev/"><i className="fa fa-instagram"></i></a></li>
                                    </ul>
                                </div>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="menu-line"></div>
            </div>

            <nav className="wrap-nav nav">
                <div className="nav-links">
                    <NavLink to="/" exact><img src={logo} alt="logo" /></NavLink>
                    <NavLink className="link" activeClassName="active-link" to="/" exact>About Me</NavLink>
                    <NavLink className="link" activeClassName="active-link" to="/portfolio">Portfolio</NavLink>
                    <NavLink className="link" activeClassName="active-link" to="/resume">Resume</NavLink>
                </div>
                <div className="social-links">
                    <ul>
                        <li><a href="https://www.linkedin.com/in/tsydykh-pokhodiev/"><i className="fa fa-linkedin"></i></a></li>
                        <li><a href="https://www.youtube.com/channel/UCqwE-YdX12zQHoWGKZE--AA"><i className="fa fa-youtube"></i></a></li>
                        <li><a href="https://www.instagram.com/tsydykh_pokhodiev/"><i className="fa fa-instagram"></i></a></li>
                    </ul>
                </div>
            </nav>
        </header>
    )
}

export default Header