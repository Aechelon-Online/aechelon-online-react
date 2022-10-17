import React from 'react'
import headShot from '../images/acs-website-headshot.png'
import './Bio.scss'
import BioP1 from './BioP1'
import BioP2 from './BioP2'
import BioP3 from './BioP3'
import './Container.scss'

export default function Bio() {
    return(
        <div className="container">
            <div className="about">
                <img src={headShot} alt="Greg Luce headshot" className="about__headshot-img" />
                <div class="about__grid--bio">
                    <div class="about__grid--bio-headshot">
                        <div class="about__grid--bio-headshot-pic">
                            <div class="about__grid--bio-headshot-pic__layer">
                            </div>
                        </div>
                    </div>
                    <div class="about__grid--bio-description">
                    <p><BioP1 /></p>
                    <p><BioP2 /></p>
                    <p><BioP3 /></p>
                    </div>
                </div>
            </div>
        </div>
            
    )
}