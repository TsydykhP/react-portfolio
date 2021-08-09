import React from 'react'

function Resume() {
    return (
        <main className="resume-wrap">
            <section className="resume-header fl-c fl-d text-c">
                <h1 className="fz-30 cursive">Resume</h1>
            </section>

            <div className="p-1-0-2-0 fl-c fl-d"><a className="btn" href="https://drive.google.com/file/d/1SLYPurTDccShrs43lrU8GDeelNG1OEEx/view?usp=sharing" target="_blank" rel="noopener noreferrer">PDF</a></div>

            <div className="resume">
                <div className="resume-dec"></div>
                <div className="grid">
                    <section className="fl-c fl-d pd-1">
                        <div className="resume-title"><h1>Tsydykh Pokhodiev</h1></div>
                        <h2 className="resume-subtitle">Front-End Developer</h2>
                        <hr />
                        <div className="resume-section"><h2>About Me</h2><hr /></div>
                        <p className="text-c fz-13">I am now 19 years old, I love honesty and openness. Most of my free time I am engaged in self-education. I want to travel and discover something new from different angles. Now I am delving into front-end development to find a job, get the desired experience, start working in a team, and enjoy the process.</p>
                        <div className="resume-section"><h2>Skills</h2><hr /></div>
                        <div className="skill fl-c fl-d">
                            <div className="skill-item">
                                <div className="skill-bg">
                                    <div className="skill-active sa-1"></div>
                                </div>
                                <h3>React.js</h3>
                            </div>
                            <div className="skill-item">
                                <div className="skill-bg">
                                    <div className="skill-active sa-2"></div>
                                </div>
                                <h3>JavaScript</h3>
                            </div>
                            <div className="skill-item">
                                <div className="skill-bg">
                                    <div className="skill-active sa-3"></div>
                                </div>
                                <h3>TypeScript</h3>
                            </div>
                            <div className="skill-item">
                                <div className="skill-bg">
                                    <div className="skill-active sa-4"></div>
                                </div>
                                <h3>Next.js</h3>
                            </div>
                            <div className="skill-item">
                                <div className="skill-bg">
                                    <div className="skill-active sa-5"></div>
                                </div>
                                <h3>Express.js</h3>
                            </div>
                            <div className="skill-item">
                                <div className="skill-bg">
                                    <div className="skill-active sa-6"></div>
                                </div>
                                <h3>Webpack</h3>
                            </div>
                            <div className="skill-item">
                                <div className="skill-bg">
                                    <div className="skill-active sa-7"></div>
                                </div>
                                <h3>Sass</h3>
                            </div>
                            <div className="skill-item">
                                <div className="skill-bg">
                                    <div className="skill-active sa-8"></div>
                                </div>
                                <h3>CSS3</h3>
                            </div>
                            <div className="skill-item">
                                <div className="skill-bg">
                                    <div className="skill-active sa-9"></div>
                                </div>
                                <h3>HTML5</h3>
                            </div>
                        </div>
                        <div className="resume-section"><h2>Contacts</h2><hr /></div>
                        <div className="resume-contacts">
                            <p>Web: tsydykh-pokhodiev.web.app</p>
                            <p>Email: tsydykhp@gmail.com</p>
                            <p>https://www.linkedin.com/in/tsydykh-pokhodiev/</p>
                        </div>
                    </section>

                    <section className="fl-d pd-1">
                        <div className="resume-r p-1-0">
                            <h1>Experience</h1>
                            <hr />
                            <div className="resume-item">
                                <h2>Freelance</h2>
                                <h3>Web-Developer <span>(2021 - Present)</span></h3>
                                <p>"In my free time I do freelance. This gives me the experience of working with real clients and clients, solving different types of problems, gradually developing and consolidating my skills."</p>
                            </div>
                        </div>
                        <div className="resume-r p-1-0">
                            <h1>Education</h1>
                            <hr />
                            <div className="resume-item">
                                <h2>BGU College</h2>
                                <h3>Information Systems <span>(2019 - 2022)</span></h3>
                                <p>"I am a student in the direction of Information Systems. I like learning, so I also learn and develop programming skills to succeed in this in addition to studying here."</p>
                            </div>
                        </div>
                        <div className="resume-r p-1-0">
                            <h1>Courses</h1>
                            <hr />
                            <div className="courses">
                                <div className="course">
                                    <h3>Project Management</h3>
                                    <p className="course-sub">Google Career Certificates</p>
                                    <p className="course-desc">"I took this course to develop my soft skills: communication, planning, empathy, teamwork, and problem solving."</p>
                                    <a className="course-link" href="https://coursera.org/share/e2fb266bc6c9deb721588e091d0fd366" target="_blank" rel="noopener noreferrer">Look</a>
                                </div>
                                <div className="course">
                                    <h3>Agile Project Management</h3>
                                    <p className="course-sub">Google Career Certificates</p>
                                    <p className="course-desc">"Learned more about Agile methodology"</p>
                                    <a className="course-link" href="https://coursera.org/share/b429f17604a8cdb439c3658f410e9504" target="_blank" rel="noopener noreferrer">Look</a>
                                </div>
                                <div className="course">
                                    <h3>Foundations of UX Design</h3>
                                    <p className="course-sub">Google Career certificates</p>
                                    <p className="course-desc">"This is useful for my future work with designers."</p>
                                    <a className="course-link" href="https://coursera.org/share/5bfe1f26996aeb2bf08f96409e70c0cc" target="_blank" rel="noopener noreferrer">Look</a>
                                </div>
                            </div>
                            <a className="fl-c" href="https://drive.google.com/drive/folders/1cZudXNOpPq4Hw88uvlWVBp-IxTEi7zsH?usp=sharing" target="_blank" rel="noopener noreferrer">Look all certificates</a>
                        </div>
                    </section>
                </div>
            </div>
        </main>
    )
}

export default Resume
