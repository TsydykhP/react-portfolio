import React, { useState, useEffect } from 'react'
import sanityClient from '../client'
import { motion } from 'framer-motion'

const Project = () => {

    const [projectData, setProjectData] = useState(null);

    useEffect(() => {
        sanityClient.fetch('*[_type == "project" ] {title, link, type, level, techStack, adaptive, optimize, image{asset->{_id, url}, alt}}')
        .then((data) => setProjectData(data))
        .catch(console.error);
    }, []);

    return (
        <motion.section className="grid fl-d" layout whileHover={{ opacity: 1}}>
            {projectData && projectData.map((project, index) => (

            <article className="project-wrap" key={index}>
                <a className="project" href={project.link} target="_blank" rel="noopener noreferrer">

                    <motion.img
                    src={project.image.asset.url}
                    alt={project.image.asset.alt}
                    initial={{ opacity: 0}}
                    animate={{ opacity: 1}}
                    whileHover={{ opacity: 0 }}
                    transition={{ delay: 0.75 }}
                    />

                    <motion.div className="desc" initial={{ opacity: 0}} whileHover={{ opacity: 1}} transition={{ delay: 0.25 }}>
                        <h3>{project.title}</h3>
                        <div className="grid type">
                            <div><strong>Type: </strong>{""}{project.type}</div>
                            <div><strong>Level: </strong>{""}{project.level}</div>
                        </div>
                        <div className="grid adapt">
                            <div><strong>Adaptive: </strong>{""}{project.adaptive}</div>
                            <div><strong>Optimized: </strong>{""}{project.optimize}</div>
                        </div>
                        <div className="project-tech pd-035-0">
                            <div><strong>Technologies: </strong>{""}{project.techStack}</div>
                        </div>
                    </motion.div>

                </a>
            </article>

            ))}
        </motion.section>
    )
}

export default Project