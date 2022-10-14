import React from 'react'
import styled, { keyframes } from 'styled-components'
import anatomyPic from '../images/anatomy-website.jpg'

export default function Portfolio() {
    return (
        <div className="portfolio">
          <img src={anatomyPic} alt="Technical website design demo" className="portfolio__design-img" />
          <h1 className="portfolio__greeting titles"><a href="/techstack/index.html">TECHSTACK</a></h1>
        </div>
    )
}