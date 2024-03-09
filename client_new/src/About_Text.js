import React, { useState } from 'react';
import './Styling/AboutTextStyle.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faJava, faBootstrap, faReact, faAws, faDocker, faJs, faHtml5, faPython, faGithub, faGitAlt, faLinux } from '@fortawesome/free-brands-svg-icons'


function About_Text() {
    const [selectedSection, setSelectedSection] = useState('skills');

    const handleClick = (button) => {
        setSelectedSection(button)
    }

    return (
        <>

            <div className='row-md-4' id='section_button'>
                <button onClick={() => handleClick('skills')} className={`about_button fw-bold fs-5 ${selectedSection === 'skills' ? 'active1' : ''}`}>Skills</button>
                <button onClick={() => handleClick('education')} className={`about_button fw-bold fs-5 ${selectedSection === 'education' ? 'active1' : ''}`}>Education</button>
            </div>

            <div className='row-md-4' id='general_text'>
                {selectedSection === 'education' && (
                    <div>

                        <div className='hstack gap-2 mb-4'>
                            <p id='about_education_text1'>
                                Tampere University of Applied Sciences (2021- )<br></br>BE in Software Engineering
                                <br></br>Tampere/Finland<br></br> GPA - 4.43/5<br></br><br></br>
                            </p>
                            <div className='vr' id='vertical_line1'></div>
                            <p id='about_education_text2'>
                                <br></br><br></br><br></br><br></br><br></br>
                                Hexagon Science High School (2017-2021)<br></br>Bursa/Turkey<br></br>GPA - 4.9/5

                            </p>
                        </div>
                        <p>
                            After completing high school in my hometown, I recognized the need for personal and academic growth. Motivated by a desire to pursue excellence in my field, I made the decision to relocate to Finland, a move that has profoundly shaped my academic journey.<br></br><br></br>
                            In Finland, I embarked on a path of higher education at Tampere University of Applied Sciences, where I am currently pursuing a Bachelor's degree in Software Engineering. This experience has provided me with a strong foundation in computer science principles and practical skills, positioning me to excel in a dynamic and evolving industry.<br></br><br></br>
                            Looking ahead, I am committed to furthering my education through advanced studies, with aspirations of pursuing a Master's degree in Engineering in Computer Science. My goal is to delve deeper into these cutting-edge areas of study, contributing to innovative solutions and advancements in technology.<br></br><br></br>
                            Driven by a passion for lifelong learning and a dedication to excellence, I am eager to embrace the challenges and opportunities that lie ahead on my academic and professional journey.
                        </p>
                    </div>
                )}
                {selectedSection === 'skills' && (
                    <div>

                        <div className='row justify-content-center'>
                            <div className='col-md-4'>
                                <div>
                                    <FontAwesomeIcon icon={faLinux} className="Github ms-3"></FontAwesomeIcon>
                                    <h4>Linux:</h4>
                                    <p>Experience using Debian and Ubuntu - Bash Scripting - Vim/Nano - Backup and Restoring Data -
                                        Network Management(Packet Capturing/WANs,VLANs,VPNs)
                                    </p>
                                </div>
                            </div>
                            <div className='col-md-4'>
                                <div>
                                    <FontAwesomeIcon icon={faPython} className="Github ms-3"></FontAwesomeIcon>
                                    <h4>Python:</h4>
                                    <p>Experience with scientific IDEs like Jupyter and Spyder - Scikit Learn - Numpy & Pandas - Prediction Algorithms(ANN-CNN) -
                                        Data Management
                                    </p>
                                </div>
                            </div>
                            <div className='col-md-4'>
                                <div>
                                    <FontAwesomeIcon icon={faReact} className="Github ms-3"></FontAwesomeIcon>
                                    <FontAwesomeIcon icon={faBootstrap} className="Github ms-3"></FontAwesomeIcon>
                                    <h4>React & Bootstrap:</h4>
                                    <p>Usage of React Hooks(useState/useEffect) - Styling with Bootstrap Components/Utilities - JSX - Redux
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className='row justify-content-center'>
                            <div className='col-md-4' >
                                <div>
                                    <FontAwesomeIcon icon={faGitAlt} className="Github ms-3"></FontAwesomeIcon>
                                    <h4>Git:</h4>
                                    <p>Version control on cloud(GitHub/GitLab) - Branch Management - Logging - CI/CD
                                    </p>
                                </div>
                            </div>
                            <div className='col-md-4' >
                                <div>
                                    <FontAwesomeIcon icon={faJava} className="Github ms-3"></FontAwesomeIcon>
                                    <h4>Java:</h4>
                                    <p>OOP - Data Structures & Algorithms(Linked Lists-Binary Trees-Queues-Stacks) - Var/Args
                                    </p>
                                </div>
                            </div>
                            <div className='col-md-4' >
                                <h3>And Others...</h3>
                                <FontAwesomeIcon icon={faGithub} className="Github ms-3"></FontAwesomeIcon>
                                <FontAwesomeIcon icon={faJs} className="Github ms-3"></FontAwesomeIcon>
                                <FontAwesomeIcon icon={faDocker} className="Github ms-3"></FontAwesomeIcon>
                                <FontAwesomeIcon icon={faAws} className="Github ms-3"></FontAwesomeIcon>
                            </div>
                        </div>
                    </div>
                )}
            </div>

        </>
    );
}

export default About_Text;