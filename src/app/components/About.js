import React from 'react'
import { NavLink } from 'react-router-dom';

function About() {
    return (
        <main>
            <section className="grid">
                <div className="pd-1 fl-e text-e">
                    <h1>Hi! My name’s <span className="name">Tsydykh</span>.</h1>
                    <h2>I'm a junior Front-end Developer.</h2>
                    <p className="p-1-0 mw-70">I like simplicity, brevity and minimalism in things, this is my style.
                    You can see my portfolio on this website:</p>
                    <NavLink className="btn" to="/" exact>Portfolio</NavLink>
                </div>
                <div className="pd-1 fl-c rel">
                    <div className="about-bg"></div>
                </div>
            </section>

            <section className="about fl-c fl-d text-c">
                <h1 className="cursive">About Me</h1>
                <div className="about-line"></div>
                <p className="mw-70">I am now 19 years old and in my free time, I like to do self-education. I want to travel and discover new things from different angles.
                Now I am delving into front-end development in order to <span className="color-t">find a job</span> and get the desired experience and <span className="color-t">start working</span> in a team.
                </p>
            </section>

            <section className="grid">
                <div className="pd-1 fl-e text-e">
                    <p>
                    My level of English: Intermediate
                    <br />Country: Russia
                    <br />City: Irkutsk
                    </p>
                </div>
                <div className="pd-1 mw-70-100 text-c-m">
                    <p>
                    E-mail: <NavLink to="/contact">tsydykhp@gmail.com</NavLink>
                    <br />Linkedin: <a href="https://www.linkedin.com/in/tsydykh-pokhodiev/">https://www.linkedin.com/in/tsydykh-pokhodiev/</a>
                    </p>
                </div>
            </section>
        </main>
    )
}

export default About
