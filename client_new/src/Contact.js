import React from 'react'
import './Styling/ContactStyle.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons'


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

                <div className='col' id='contact_row2_1_col_1'>
                  +358 40 3613908
                </div>
                <div className='col'>
                  <FontAwesomeIcon icon={faPhone}></FontAwesomeIcon>
                </div>

              </div>
              <div className='row' id='contact_row2_2'>

                <div className='col p-0'>
                  <p>ozanefe.topcu@gmail.com</p>
                </div>
                <div className='col'>
                  <FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon>
                </div>

              </div>
            </div>

          </div>

        </div>
    </>
  )
}
