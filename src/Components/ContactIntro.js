import React from 'react'
import { Link } from 'react-router-dom'

export default function ContactIntro() {
    return (
        <div className="contact--intro">
          <img src={require('../images/pro-handshake.jpeg')} alt="Greg Luce headshot" className="contact--intro__handshake-img" />
          <h1 className="contact--intro__greeting titles"><Link to="/contact">CONTACT</Link></h1>
      </div>
    )
}