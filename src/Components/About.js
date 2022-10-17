import React from 'react'
import styled, { keyframes } from 'styled-components'
import headShot from '../images/acs-website-headshot.png'
import { Link } from 'react-router-dom'

export default function About() {
    return (
        <div className="about">
          <img src={headShot} alt="Greg Luce headshot" className="about__headshot-img" />
          <h1 className="about__greeting titles"><Link to="build/bio">BIO</Link></h1>
        </div>
    )
}