import React from 'react'
import './Styling/HomeStyle.css'
import HomeImage from './Pictures/personalpic.png'
import Button from 'react-bootstrap/Button';

export default function Home() {
  return (
    <>
        <div id='home'>

            <div className='container-fluid' id='homeContainer1'>

                <div id='outer_box1'>

                    <div className='row flex align-items-center justify-content-center' id='home_row1'>
                        <div className='col' id='home_col1'>

                            <div class="hstack gap-2">
                                <div className="vr" id='vertical_line'></div>
                                <div>
                                    <div class="lh-1">
                                        <p id='sub_title' className='fw-light'>
                                            Software Developer
                                        </p>
                                        <p className='fw-bold' id='name_title'>
                                            Ozan Topcu.
                                        </p>
                                    </div>
                                    <p id='home_text'>
                                        A passionate Turkish Software Developer that thrives out of his comfort zone. Determined to have an impact on the industry
                                        and future generations.
                                    </p>
                                    <a href='.' download="Resume.docx">
                                    <Button variant='outline-dark' id='custom-outline'>My CV</Button>
                                    </a>
                                </div>
                            </div>

                        </div>

                        <div className='col' id='home_col2'>
                            <div id="imageDiv">
                                <div id='outer_box2'>
                                    <img src={HomeImage} alt='Landing Page Pic' id='homeimg'/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


            </div>
        </div>
    </>
  )
}

