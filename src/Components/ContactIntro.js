import React from 'react'
import styled, { keyframes } from 'styled-components'

export default function ContactIntro() {
    return (
        <div className="contact--intro">
          <img src={require('../images/pro-handshake.jpeg')} alt="Greg Luce headshot" className="contact--intro__handshake-img" />
          <h1 className="contact--intro__greeting titles"><a href="/contact">CONTACT</a></h1>
      </div>
    )
}