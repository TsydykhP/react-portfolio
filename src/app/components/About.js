import React from 'react'
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion'
import bg from '../assets/Portfolio.png'

function About() {
    return (
        <main>
            <section className="grid">
                <motion.div className="pd-1 fl-e text-e" initial={{ opacity: 0}} animate={{ opacity: 1}} transition={{ delay: 0.75 }}>
                    <h1>Hi! My name’s <span className="name">Tsydykh</span>.</h1>
                    <h2>I'm a junior Front-end Developer.</h2>
                    <p className="p-1-0 mw-70">I like simplicity, brevity, and minimalism in things, this is my design inspiration.
                    You're can see my portfolio on this website:</p>
                    <NavLink className="btn" to="/portfolio" exact>Portfolio</NavLink>
                </motion.div>
                <div className="pd-1 fl-c rel">
                    <motion.div className="about-bg" initial={{ opacity: 0}} animate={{ opacity: 1}} transition={{ delay: 0.75 }}><img src={bg} alt="portfolio" /></motion.div>
                </div>
            </section>

            <motion.section className="about fl-c fl-d text-c" initial={{ opacity: 0}} animate={{ opacity: 1}} transition={{ delay: 1 }}>
                <h1 className="hpage">About Me</h1>
                <div className="about-line"></div>
                <p className="mw-70">I am now 19 years old and in my free time, I like to do self-education. I want to travel and discover new things from different angles.
                Now I am delving into front-end development in order to <span className="color-t">find a job</span> and get the desired experience and <span className="color-t">start working</span> in a team.
                </p>
            </motion.section>

            <motion.section className="grid" initial={{ opacity: 0}} animate={{ opacity: 1}} transition={{ delay: 1 }}>
                <div className="pd-1 fl-e text-e">
                    <p>
                    My level of English: Intermediate
                    <br />Country: Russia
                    <br />City: Irkutsk
                    </p>
                </div>
                <div className="pd-1 mw-70-100 text-c-m">
                    <p>
                    E-mail: <a href="mailto:tsydykhp@gmail.com">tsydykhp@gmail.com</a>
                    <br />Linkedin: <a href="https://www.linkedin.com/in/tsydykh-pokhodiev/">https://www.linkedin.com/in/tsydykh-pokhodiev/</a>
                    </p>
                </div>
            </motion.section>
            <motion.div className="fl-c fl-d text-c pd-1" initial={{ opacity: 0}} animate={{ opacity: 1}} transition={{ delay: 1 }}>
                <NavLink className="btn" to="/portfolio" exact>Portfolio</NavLink>
            </motion.div>
        </main>
    )
}

export default About
