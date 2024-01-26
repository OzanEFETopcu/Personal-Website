import React, { useState } from 'react';
import './Styling/AboutTextStyle.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faJava, faBootstrap, faReact, faAws, faDocker, faJs, faHtml5, faPython, faGithub, faGitAlt, faLinux } from '@fortawesome/free-brands-svg-icons'


function About_Text() {
    const [selectedSection, setSelectedSection] = useState('skills');

    const handleClick = (button) =>{
        setSelectedSection(button)
    }

    return (
      <>

        <div className='row-md-4' id='section_button'>
            <button onClick={() => handleClick('skills')} className={`about_button fw-bold fs-5 ${selectedSection === 'skills' ? 'active1' : ''}`}>Skills</button>
            <button onClick={() => handleClick('education')} className={`about_button fw-bold fs-5 ${selectedSection === 'education' ? 'active1' : ''}`}>Education</button>
            <button onClick={() => handleClick('general')} className={`about_button fw-bold fs-5 ${selectedSection === 'general' ? 'active1' : ''}`}>General</button>
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
                    After graduated from highscool in my hometown I knew I had to create some changes for myself and <br></br>my future so I decided to move to Finland.
                    It was one of the best decisions I've ever made for my <br></br>academic life... <br></br>I set my mind to doing at least one Master's degree related to my area
                    so that I can dig deeper into <br></br>specialized topics like Artificial Intelligence and Big Data Analytics.
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
            {selectedSection === 'general' && (
            <div>
                <p>
                Hey! My name is Ozan Topcu, I am a second-year Software Engineering student at TAMK. I've been <br></br>living in Finland for a year now and
                it has been one of the best years of all time. I've met with an <br></br>incredible amount of people from all around the world who have unique
                stories and experiences, at <br></br>the same time I got to experience the hardships of living by myself and learning to stand on my feet. <br></br>All in all, my
                experience here in general thought me how to become a responsible and outgoing person.

                <br></br><br></br>In my free time, I usually like to get out with friends to try out new cafés and restaurants; furthermore, <br></br>when we have the chance usually try to
                travel to different countries for even more unique adventures. <br></br>I really find it exhilarating to experience things that can either improve me as a
                person or provide me with <br></br>different perspectives. I do like to cook for myself and my loved ones occasionally and I do make a <br></br>mean risotto.

                <br></br><br></br>In the end, I would describe myself as being sincere, trust-worthy, and most importantly joyful person to <br></br>have around.
                </p>
            </div>
            )}
        </div>

      </>
    );
  }

  export default About_Text;