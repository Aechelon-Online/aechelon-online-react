import React from 'react'
import styled, { keyframes } from 'styled-components'

export default function Portfolio() {
    return (
        <div className="portfolio">
          <img src={require('../images/anatomy-website.jpg')} alt="Technical website design demo" className="portfolio__design-img" />
          <h1 className="portfolio__greeting titles"><a href="/techstack">TECHSTACK</a></h1>
        </div>
    )
}