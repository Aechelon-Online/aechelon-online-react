import React from 'react'
import styled, { keyframes } from 'styled-components'
import headShot from '../images/acs-website-headshot.png'

export default function About(props) {
  console.log(props)
    return (
        <div className="about">
          <img src={headShot} alt="Greg Luce headshot" className="about__headshot-img" />
          <h1 className="about__greeting titles"><a href="/bio/index.html">BIO</a></h1>
        </div>
    )
}