import React from 'react'
import { NavLink } from 'react-router-dom';

function About() {
    return (
        <main>
            <section className="grid">
                <div className="pd-1">
                    <h1>Hi! My name’s Tsydykh.</h1>
                    <h2>I'm a junior Front-end Developer.</h2>
                    <p className="p-1-0">I like simplicity, brevity and minimalism in things, this is my style.
                    You can see my portfolio on this website.</p>
                    <NavLink className="btn" to="/" exact>Portfolio</NavLink>
                </div>

                <div className="pd-1"></div>

            </section>
        </main>
    )
}

export default About
