import React from 'react'
import { motion } from 'framer-motion'

import reactLogo from '../assets/tech/react.svg'
import jsLogo from '../assets/tech/js.svg'
import expressLogo from '../assets/tech/expressjs.svg'
import mongoLogo from '../assets/tech/mongodb.svg'
import nodejsLogo from '../assets/tech/nodejs.svg'
import sassLogo from '../assets/tech/sass.svg'
import tsLogo from '../assets/tech/typescript.svg'
import webpackLogo from '../assets/tech/webpack.svg'

const TechLogos = () => {
    return (
        <motion.section className="text-c cursive" initial={{ opacity: 0}} animate={{ opacity: 1}} transition={{ delay: 0.75 }}>
            <h1 className="fz-30">Projects</h1>
            <p className="pd-035-0">with</p>
            <div className="fl-c">
                <div className="tech"><img className="tech-i" src={reactLogo} alt="reactjs" /></div>
                <div className="tech"><img className="tech-i" src={tsLogo} alt="typescript" /></div>
                <div className="tech"><img className="tech-i" src={expressLogo} alt="expressjs" /></div>
                <div className="tech"><img className="tech-i" src={webpackLogo} alt="webpack" /></div>
                <div className="tech"><img className="tech-i" src={mongoLogo} alt="mongodb" /></div>
                <div className="tech"><img className="tech-i" src={jsLogo} alt="javascript" /></div>
                <div className="tech"><img className="tech-i" src={nodejsLogo} alt="nodejs" /></div>
                <div className="tech"><img className="tech-i" src={sassLogo} alt="sass" /></div>
            </div>
            <hr className="m-1" />
        </motion.section>
    )
}

export default TechLogos