import React from 'react'
import './Bio.scss'
import BioP1 from './BioP1'
import BioP2 from './BioP2'
import BioP3 from './BioP3'
import './Container.scss'
import Media from 'react-media'

export default function Bio() {
    return(
        <div className="container">
            <div className="bio">
                <img src={require('../images/acs-website-headshot.jpeg')} alt="Greg Luce headshot" className="bio__headshot-img" />
                <Media query="(min-width: 700px)">
                    {matches => {
                        return (matches ?
                            <div className="bio__grid--bio">
                                <div className="bio__grid--bio-headshot">
                                    <div className="bio__grid--bio-headshot-pic">
                                        <div className="bio__grid--bio-headshot-pic__layer">
                                        </div>
                                    </div>
                                </div>
                                <div className="bio__grid--bio-description">
                                <p><BioP1 /></p>
                                <p><BioP2 /></p>
                                <p><BioP3 /></p>
                                </div>
                            </div> 
                            :
                            <div className="bio__grid--bio">
                                <div className="bio__grid--bio-headshot">
                                    <div className="bio__grid--bio-headshot-pic">
                                        <div className="bio__grid--bio-headshot-pic__layer">
                                        </div>
                                    </div>
                                </div>
                                <div className="bio__grid--bio-description--tablet">
                                <p><BioP1 /></p>
                                <p><BioP2 /></p>
                                <p><BioP3 /></p>
                                </div>
                            </div>
                        )
                    }}
                </Media>
            </div>
        </div>      
    )
}