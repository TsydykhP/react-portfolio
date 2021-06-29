import React from 'react'
import google from '../assets/google.svg'

function Resume() {
    return (
        <main className="resume-wrap">
            <section className="resume-header fl-c fl-d text-c">
                <h1 className="fz-30 cursive">Resume</h1>
            </section>

            <div className="p-1-0-2-0 fl-c fl-d"><a className="btn" href="View">PDF</a></div>

            <div className="resume">
                <div className="resume-dec"></div>
                <div className="grid">
                    <section className="fl-c fl-d pd-1">
                        <div className="resume-title"><h1>Tsydykh Pokhodiev</h1></div>
                        <h2 className="resume-subtitle">Front-End Developer</h2>
                        <hr />
                        <div className="resume-section"><h2>About Me</h2><hr /></div>
                        <p className="text-c fz-13">I am now 19 years old and in my free time, I like to do self-education. I want to travel and discover new things from different angles. Now I am delving into front-end development in order to find a job and get the desired experience and start working in a team.</p>
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
                                <h3>Express.js</h3>
                            </div>
                            <div className="skill-item">
                                <div className="skill-bg">
                                    <div className="skill-active sa-5"></div>
                                </div>
                                <h3>React Native</h3>
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
                            <p>Web: tsydykh-pokhodiev.com</p>
                            <p>Email: tsydykhp@gmail.com</p>
                            <p>https://www.linkedin.com/in/tsydykh-pokhodiev/</p>
                        </div>
                    </section>

                    <section className="pd-1">
                        <div className="p-1-0">
                            <h1>Experience</h1>
                            <hr />
                            <div className="resume-item">
                                <h2>Freelance</h2>
                                <h3>Front-End Developer</h3>
                                <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."</p>
                            </div>
                            <div className="resume-item">
                                <h2>Freelance</h2>
                                <h3>Web-Developer</h3>
                                <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."</p>
                            </div>
                        </div>
                        <div className="p-1-0">
                            <h1>Education</h1>
                            <hr />
                            <div className="resume-item">
                                <h2>BGU College</h2>
                                <h3>Information Systems</h3>
                                <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."</p>
                            </div>
                        </div>
                        <div className="p-1-0">
                            <h1>Courses</h1>
                            <hr />
                            <div className="courses">
                                <div className="course">
                                    <img src={google} alt="googleLogo" />
                                    <h3>Google Project Management</h3>
                                    <p>Google Career Certificates</p>
                                    <a className="course-link" href="https://coursera.org/share/e2fb266bc6c9deb721588e091d0fd366">View</a>
                                </div>
                                <div className="course">
                                    <img src={google} alt="googleLogo" />
                                    <h3>Google Agile Project Management</h3>
                                    <p>Google Career Certificates</p>
                                    <a className="course-link" href="https://coursera.org/share/b429f17604a8cdb439c3658f410e9504">View</a>
                                </div>
                                <div className="course">
                                    <img src={google} alt="googleLogo" />
                                    <h3>Google Foundations of UX Design</h3>
                                    <p>Google Career Certificate</p>
                                    <a className="course-link" href="https://coursera.org/share/5bfe1f26996aeb2bf08f96409e70c0cc">View</a>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </main>
    )
}

export default Resume
