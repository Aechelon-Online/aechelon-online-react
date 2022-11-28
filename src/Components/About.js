import React from 'react'
import { Link } from 'react-router-dom'
import './About.scss'

export default function About() {
    return (
        <div className="about">
          <img src={require('../images/acs-website-headshot.webp')} alt="Greg Luce headshot" className="about__headshot-img" />
          <h1 className="about__greeting titles"><Link to="/bio">PROFILE</Link></h1>
        </div>
    )
}