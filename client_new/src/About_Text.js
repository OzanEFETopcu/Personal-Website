import React, { useState } from 'react';
import './Styling/AboutTextStyle.css'


function About_Text() {
    const [selectedSection, setSelectedSection] = useState('education');

    return (
      <>

        <div className='row-md-4' id='section_button'>
            <button onClick={() => setSelectedSection('education')}>Education</button>
            <button onClick={() => setSelectedSection('skills')}>Skills</button>
            <button onClick={() => setSelectedSection('general')}>General</button>
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