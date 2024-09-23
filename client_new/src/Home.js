import React from 'react';
import './Styling/HomeStyle.css';
import HomeImage from './Pictures/landingImage.png';
import CertificateBadge from './Pictures/certificateBadge.png';
import Button from 'react-bootstrap/Button';
import Pdf from './CV/Ozan_CV_3.pdf';

export default function Home() {

    return (
        <>
            <div id='home'>
                {/*Box that has the name, and introduction*/}
                <div id='box1'>
                    {/*This is the vertical line in front of introduction*/}
                    <div className="vr" id='vertical_line'></div>
                    <div>
                        <div className="lh-1">
                            <p className='fw-light' id='sub_title'>
                                Software Developer
                            </p>
                            <p className='fw-bold' id='name_title'>
                                Ozan Topcu.
                            </p>
                        </div>
                        <p id='home_text'>
                            A passionate Software Developer that thrives out of his comfort zone. Determined to have an impact on the industry
                            and future generations.
                        </p>
                        {/* CV Button */}
                        <a href={Pdf} target={'_blank'} rel={'noreferrer'}>
                            <Button variant='outline-dark' id='custom-outline'>My CV</Button>
                        </a>
                    </div>
                </div>

                {/* Landing page image */}
                <img src={HomeImage} alt='Landing Page Pic' id='homeimg' />

                {/* Empty box */}
                <div id='box2'><p>&nbsp;</p></div>

                {/* AWS Certification Badge */}
                <a href={"https://www.credly.com/badges/2f9c54b3-ecee-478f-bb65-c948d523ae0c/public_url"} target="_blank" rel={'noreferrer'}><img src={CertificateBadge} alt="Badge" id='badge' /></a>

            </div>
        </>
    );
}
