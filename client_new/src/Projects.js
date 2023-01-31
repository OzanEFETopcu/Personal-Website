import React from 'react'
import './Styling/ProjectsStyle.css'
import Project1 from './Pictures/personalpic2_1.jpg'

export default function Projects() {
  return (
    <>
        <div id="projects">

          <div className='container-fluid' id='projectsContainer1'>

            <div className='row flex' id='projectsrow1'>
              <div className='project_div1'>
                <div className='text-white p-5'>
                  <p>This is my first project. This paragraph will be changed later. OOGA BOOGA</p>
                </div>
                <div>
                  <img src={Project1} alt='Project1 Image' id='project1_img'/>
                </div>
              </div>
            </div>

            <div className='row flex' id='projectsrow2'>
              <div className='project_div2'>
                <div>
                  <img src={Project1} alt='Project2 Image' id='project2_img'/>
                </div>
                <div className='text-white p-5'>
                  <p>This is my first project. This paragraph will be changed later. OOGA BOOGA</p>
                </div>
              </div>
            </div>

            <div className='row flex' id='projectsrow1'>
              <div className='project_div1'>
                <div className='text-white p-5'>
                  <p>This is my first project. This paragraph will be changed later. OOGA BOOGA</p>
                </div>
                <div>
                  <img src={Project1} alt='Project3 Image' id='project1_img'/>
                </div>
              </div>
            </div>

          </div>

        </div>
    </>
  )
}

