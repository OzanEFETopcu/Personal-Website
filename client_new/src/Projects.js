import React from 'react'
import './Styling/ProjectsStyle.css'
import Project1 from './Pictures/personalpic2_1.jpg'

export default function Projects() {
  return (
    <>
        <div id="projects">

          <div className='container-fluid' id='projectsContainer1'>

            <div className='row flex' id='projectsrow1'>
              <div id='project1_div'>
                <div>
                  <img src={Project1} alt='Project1 Image' id='project1_img'/>
                </div>
                <div className='text-white'>
                  <p>This is my first project. This paragraph will be changed later. OOGA BOOGA</p>
                </div>
              </div>
            </div>

            <div className='row flex' id='projectsrow2'>
              <div id='project1_div'>
                <div>
                  <img src={Project1} alt='Project1 Image' id='project1_img'/>
                </div>
                <div className='text-white'>
                  <p>This is my first project. This paragraph will be changed later. OOGA BOOGA</p>
                </div>
              </div>
            </div>

            <div className='row flex' id='projectsrow3'>
              <div id='project1_div'>
                <div>
                  <img src={Project1} alt='Project1 Image' id='project1_img'/>
                </div>
                <div className='text-white'>
                  <p>This is my first project. This paragraph will be changed later. OOGA BOOGA</p>
                </div>
              </div>
            </div>

          </div>

        </div>
    </>
  )
}

