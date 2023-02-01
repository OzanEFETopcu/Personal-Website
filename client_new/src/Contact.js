import React from 'react'
import './Styling/ContactStyle.css'


export default function Contact() {
  return (
    <>
        <div id="contact">

          <div className='container-fluid text-white' id='contactContainer1'>

            <div className='col' id='contact_col1'>
              <div className='row' id='contact_row1_1'>
                Contact Me
              </div>
              <div className='row' id='contact_row1_2'>
                Copyright©2023, Ozan Efe Topcu, All rights reserved.
              </div>
            </div>

            <div className='col' id='contact_col2'>
              <div className='row' id='contact_row2_1'>
                +358 40 3613908 Phone Logo
              </div>
              <div className='row' id='contact_row2_2'>
                ozanefe.topcu@gmail.com Mail Logo
              </div>
            </div>

          </div>

        </div>
    </>
  )
}
