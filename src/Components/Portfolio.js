import React from 'react'
import { Link } from 'react-router-dom'

export default function Portfolio() {
    return (
        <div className="portfolio">
          <img src={require('../images/anatomy-website.webp')} alt="Technical website design demo" className="portfolio__design-img" />
          <h1 className="portfolio__greeting titles"><Link to="/techstack">TECHSTACK</Link></h1>
        </div>
    )
}