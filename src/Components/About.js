import React from 'react'
import { Link } from 'react-router-dom'

export default function About() {
    return (
        <div className="about">
          <img src={require('../images/acs-website-headshot.png')} alt="Greg Luce headshot" className="about__headshot-img" />
          <h1 className="about__greeting titles"><Link exact to="/bio">BIO</Link></h1>
        </div>
    )
}