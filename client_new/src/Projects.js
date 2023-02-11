import React from 'react'
import './Styling/ProjectsStyle.css'
import Project1 from './Pictures/ci-cd-project.png'
import Project2 from './Pictures/embedded_project.png'

export default function Projects() {
  return (
    <>
        <div id="projects">

          <div className='container-fluid' id='projectsContainer1'>

            <div className='row flex' id='projectsrow1'>
              <div className='project_div1'>
                <a href="https://github.com/OzanEFETopcu/DevOps-Software-Production" className='text-decoration-none' id='link'>
                  <div class="layer1">
                    <div className='text-white p-5'>
                      <p>This is my first project. This paragraph will be changed later. OOGA BOOGA</p>
                    </div>
                    <div>
                      <img src={Project1} alt='Project1 Image' id='project1_img'/>
                    </div>
                  </div>
                </a>
              </div>
            </div>

            <div className='row flex' id='projectsrow2'>
              <div className='project_div2'>
                <a href="https://github.com/OzanEFETopcu/Embedded-Systems" className='text-decoration-none' id='link'>
                  <div class="layer2">
                    <div>
                      <img src={Project2} alt='Project2 Image' id='project2_img'/>
                    </div>
                    <div className='text-white p-5'>
                      <p>Advanced C and C++ microcontroller programming. CPU peripherals, interfaces (I2C, Spi, Uart). Connecting to real life IO (LCD, keyboard, sensors, actuators).</p>
                    </div>
                  </div>
                </a>
              </div>
            </div>

            <div className='row flex' id='projectsrow1'>
              <div className='project_div1'>
                <div class="layer1">
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

        </div>
    </>
  )
}

