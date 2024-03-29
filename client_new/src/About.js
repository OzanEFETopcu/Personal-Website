import React from 'react'
import './Styling/AboutStyle.css'
import AboutImage from './Pictures/personalpic2_1.jpg'
import About_Text from './About_Text'

export default function About() {
  return (
    <>
        <div id="about">

          <div className='container-fluid' id='aboutContainer1'>
            <div style={{ overflow: 'hidden', position:'absolute',
                          width:'100%', top:'0', bottom:'0', display: 'flex' }}>
              <div id='background_circle'></div>
            </div>

            <div className='row flex align-items-center justify-content-center' id='about_row1'>

              <div className='col-md-5 flex-shrink' id='about_col1'>
                  <div className='justify-content-center' id="about_imageDiv">
                      <img src={AboutImage} alt='Landing Page Pic' id='aboutimg'/>
                  </div>
              </div>

              <div className='col-md-7' id='about_col2'>
                <About_Text/>
              </div>

            </div>

          </div>

        </div>
    </>
  )
}
