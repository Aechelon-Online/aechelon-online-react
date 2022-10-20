import React from 'react'
import styled, { keyframes } from 'styled-components'
import shakeHands from '../images/pro-handshake.jpeg'

export default function ContactIntro() {
    return (
        <div className="contact--intro">
          <img src={shakeHands} alt="Greg Luce headshot" className="contact--intro__handshake-img" />
          <h1 className="contact--intro__greeting titles"><a href="aechelon-online-react/build/contact">CONTACT</a></h1>
      </div>
    )
}