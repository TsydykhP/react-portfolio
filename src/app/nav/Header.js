import React from 'react';
import { motion } from 'framer-motion'
import { NavLink } from 'react-router-dom';
import logo from '../assets/logo.png';

function Header() {
    return (
        <header className="header">
            <div className="menu">
                <NavLink className="logo" to="/" exact><img src={logo} alt="logo" /></NavLink>
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

            <motion.nav className="wrap-nav nav" whileHover={{ opacity: 1}} >
                <motion.div className="nav-links" initial={{ opacity: 0}} animate={{ opacity: 1}} transition={{ delay: 0.65 }}>
                    <NavLink to="/" exact><img src={logo} alt="logo" /></NavLink>
                    <NavLink className="link" activeClassName="active-link" to="/" exact>About Me</NavLink>
                    <NavLink className="link" activeClassName="active-link" to="/portfolio">Portfolio</NavLink>
                    <NavLink className="link" activeClassName="active-link" to="/resume">Resume</NavLink>
                </motion.div>
                <motion.div className="social-links" initial={{ opacity: 0}} animate={{ opacity: 1}} transition={{ delay: 1 }}>
                    <ul>
                        <li><a href="https://www.linkedin.com/in/tsydykh-pokhodiev/"><i className="fa fa-linkedin"></i></a></li>
                        <li><a href="https://www.youtube.com/channel/UCqwE-YdX12zQHoWGKZE--AA"><i className="fa fa-youtube"></i></a></li>
                        <li><a href="https://www.instagram.com/tsydykh_pokhodiev/"><i className="fa fa-instagram"></i></a></li>
                    </ul>
                </motion.div>
            </motion.nav>
        </header>
    )
}

export default Header