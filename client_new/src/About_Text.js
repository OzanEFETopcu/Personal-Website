import React, { useState } from 'react';
import './Styling/AboutTextStyle.css'


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

        <div className='row-md-4'>
            {selectedSection === 'education' && (
            <div>
                <h2 className='lh-lg'>Education</h2>
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
                <h2>Skills</h2>
                <p>Here is some information about my skills...</p>
            </div>
            )}
            {selectedSection === 'general' && (
            <div>
                <h2>General</h2>
                <p>Here is some general information...</p>
            </div>
            )}
        </div>

      </>
    );
  }

  export default About_Text;