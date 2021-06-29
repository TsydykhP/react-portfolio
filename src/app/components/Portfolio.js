import React, { useState, useEffect } from 'react'
import sanityClient from '../client'
import reactLogo from '../assets/tech/react.svg'
import jsLogo from '../assets/tech/js.svg'
import expressLogo from '../assets/tech/expressjs.svg'
import mongoLogo from '../assets/tech/mongodb.svg'
import nodejsLogo from '../assets/tech/nodejs.svg'
import sassLogo from '../assets/tech/sass.svg'
import tsLogo from '../assets/tech/typescript.svg'
import webpackLogo from '../assets/tech/webpack.svg'

function Portfolio() {

    const [projectData, setProjectData] = useState(null);

    useEffect(() => {
        sanityClient.fetch('*[_type == "project" ] {title, link, type, level, techStack, adaptive, optimize, image{asset->{_id, url}, alt}}')
        .then((data) => setProjectData(data))
        .catch(console.error);
    }, []);

    return (
        <main>
            <section className="text-c cursive">
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
            </section>
            <section className="grid fl-d">
                {projectData && projectData.map((project, index) => (
                <article className="project-wrap" key={index}>
                    <a className="project" href={project.link} target="_blank" rel="noopener noreferrer">
                        <img src={project.image.asset.url} alt={project.image.asset.alt} />
                        <div className="project-desc">
                            <h3 className="cursive fz-24">{project.title}</h3>
                            <div className="grid type">
                                <div><strong>Type: </strong>{""}{project.type}</div>
                                <div><strong>Level: </strong>{""}{project.level}</div>
                            </div>
                            <div className="project-tech pd-035-0"><strong>Technologies: </strong>{""}{project.techStack}</div>
                            <div className="grid adapt">
                                <div><strong>Adaptive: </strong>{""}{project.adaptive}</div>
                                <div><strong>Optimized: </strong>{""}{project.optimize}</div>
                            </div>
                        </div>
                    </a>
            </article>
                ))}
            </section>
        </main>
    )
}

export default Portfolio
