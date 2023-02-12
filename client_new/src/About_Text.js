import React, { useState } from 'react';
import './Styling/AboutTextStyle.css'


function About_Text() {
    const [selectedSection, setSelectedSection] = useState('skills');
    const [selectedButton, setSelectedButton] = useState(null);

    const handleClick = (button) =>{
        setSelectedButton(button);
        setSelectedSection(button)
    }

    return (
      <>

        <div className='row-md-4' id='section_button'>
            <button onClick={() => handleClick('skills')} className={`about_button fw-bold fs-5 ${selectedSection === 'skills' ? 'active' : ''}`}>Skills</button>
            <button onClick={() => handleClick('education')} className={`about_button fw-bold fs-5 ${selectedSection === 'education' ? 'active' : ''}`}>Education</button>
            <button onClick={() => handleClick('general')} className={`about_button fw-bold fs-5 ${selectedSection === 'general' ? 'active' : ''}`}>General</button>
        </div>

        <div className='row-md-4'>
            {selectedSection === 'education' && (
            <div>
                <h2>Education</h2>
                <p>Here is some information about my education...</p>
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