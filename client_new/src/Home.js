import React from 'react'
import './Styling/HomeStyle.css'
import HomeImage from './Pictures/personalpic.png'

export default function Home() {
  return (
    <>
        <div id='home'>

            <div className='container-fluid' id='homeContainer1'>

                <div className='row flex align-items-center justify-content-center' id='home_row1'>

                    <div className='col' id='home_col1'>
                        This is my test landing page. These letters dont mean anything.
                        Typing more so that I can check how it looks on the website.
                        More and more letters are flowing through my website. So how is everybody?
                        Hope this works really good.
                    </div>

                    <div className='col' id='home_col2'>
                        <div id="imageDiv">
                            <img src={HomeImage} alt='Landing Page Pic' id='homeimg'/>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    </>
  )
}

