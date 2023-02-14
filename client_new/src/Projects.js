import React from 'react'
import './Styling/ProjectsStyle.css'
import Project1 from './Pictures/ci-cd-project.png'
import Project2 from './Pictures/embedded_project.png'
import Project3 from './Pictures/AI_Project_pic.png'

export default function Projects() {
  return (
    <>
        <div id="projects">

          <div className='container-fluid' id='projectsContainer1'>

            <div className='row flex' id='projectsrow1'>
              <div className='project_div1'>
                <a href="https://github.com/OzanEFETopcu/DevOps-Software-Production" target="_blank" className='text-decoration-none' id='link'>
                  <div className="layer1">
                    <div className='text-white p-5'>
                      <p>Using DevOps Web development methods and practicing with a Web Software project. Version control,
                        Docker, Testing automation, CI/CD Pipeline, deployment process.</p>
                      <p id='with_arrow1'>GitHub Repo</p>
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
                <a href="https://github.com/OzanEFETopcu/Embedded-Systems"  target="_blank" className='text-decoration-none' id='link'>
                  <div className="layer2">
                    <div>
                      <img src={Project2} alt='Project2 Image' id='project2_img'/>
                    </div>
                    <div className='text-white p-5'>
                      <p>Advanced C and C++ microcontroller programming. CPU peripherals, interfaces (I2C, Spi, Uart).
                         Connecting to real life IO (LCD, keyboard, sensors, actuators).</p>
                      <p id='with_arrow2'>GitHub Repo</p>
                    </div>
                  </div>
                </a>
              </div>
            </div>

            <div className='row flex' id='projectsrow1'>
              <div className='project_div1'>
                <a href="https://github.com/OzanEFETopcu/AI-and-ML-projects" target="_blank" className='text-decoration-none' id='link'>
                  <div className="layer1">
                    <div className='text-white p-5'>
                      <p>Set of different Artificial Intelligence and Machine Learning projects using algorithms like several Regression methods,
                        Decision Trees/Random Forests for supervised learning and Artificial Neural Network, Convolutional Neural Network,
                        Clustering for unsupervised learning</p>
                      <p id='with_arrow1'>GitHub Repo</p>
                    </div>
                    <div>
                      <img src={Project3} alt='Project3 Image' id='project3_img'/>
                    </div>
                  </div>
                </a>
              </div>
            </div>

          </div>

        </div>
    </>
  )
}

