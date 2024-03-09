import React from 'react'
import './Styling/ProjectsStyle.css'
import Project1 from './Pictures/ci-cd-project.png'
import Project2 from './Pictures/arduino.png'
import Project3 from './Pictures/randomForest.png'
import Project4 from './Pictures/pngegg.png'

export default function Projects() {
  return (
    <>
      <div id="projects">
        <h1 className="page-title">Projects</h1>
        <div id='projectsContainer1'>
          <div>
            <a href="https://github.com/OzanEFETopcu/DevOps-Software-Production" target="_blank" className='text-decoration-none single_project layer1'>
              <div className='project_image'><img src={Project1} alt='Project1 Image' id='img1' /></div>
              <div className='project_text'><p>Using DevOps Web development methods and practicing with a Web Software project. Version control,
                Docker, Testing automation, CI/CD Pipeline, deployment process.</p>
                <p id='with_arrow1'>GitHub Repo</p> </div>
            </a>
          </div>
          <div>
            <a href="https://github.com/OzanEFETopcu/Embedded-Systems" target="_blank" className='text-decoration-none single_project layer1'>
              <div className='project_image'><img src={Project2} alt='Project2 Image' id='img2' /></div>
              <div className='project_text'><p>Advanced C and C++ microcontroller programming. CPU peripherals, interfaces (I2C, Spi, Uart).
                Connecting to real life IO (LCD, keyboard, sensors, actuators).</p>
                <p id='with_arrow1'>GitHub Repo</p> </div>
            </a>
          </div>
          <div>
            <a href="https://github.com/OzanEFETopcu/AI-and-ML-projects" target="_blank" className='text-decoration-none single_project layer1'>
              <div className='project_image'><img src={Project3} alt='Project3 Image' id='img2' /></div>
              <div className='project_text'><p>Set of different Artificial Intelligence and Machine Learning projects using algorithms like several Regression methods,
                Decision Trees/Random Forests for supervised learning and Artificial Neural Network, Convolutional Neural Network,
                Clustering for unsupervised learning</p>
                <p id='with_arrow1'>GitHub Repo</p> </div>
            </a>
          </div>
          <div>
            <a href="https://github.com/OzanEFETopcu/DroneTransportation" target="_blank" className='text-decoration-none single_project layer1'>
              <div className='project_image'><img src={Project4} alt='Project4 Image' id='img4' /></div>
              <div className='project_text'><p>Drone Fleet Management Architecture written in Java(Spring Boot), React, and
                uses MQ communication for individual drones. There are multiple frontend implementation for both system administrators to
                visualize drone status and for customers to actually place orders to the system. In addition the backend automatically manages
                drones, their destination, status, and their commands. I also created a database to store the travel information of drones and individual
                drone information.
              </p>
                <p id='with_arrow1'>GitHub Repo</p> </div>
            </a>
          </div>
        </div>
        <div>
          <a href="https://github.com/OzanEFETopcu/DroneTransportation" target="_blank" className='text-decoration-none single_project layer1' style={{ width: '95vw' }}>
            <div className='project_text' style={{ marginBottom: 0, width: '85vw', alignItems: 'center' }}><p style={{ fontSize: 25, margin: 0 }}>
              For more: My GitHub Page
            </p> </div>
          </a>
        </div>
      </div>
    </>
  )
}

