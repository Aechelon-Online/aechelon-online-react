import React from 'react'
import shakeHands from '../images/pro-handshake.jpeg'
import './Contact.scss'

export default function Contact() {
    return(
        <div className="contact">
          <img src={shakeHands} alt="Greg Luce headshot" className="contact__handshake-img" />
          <div className="contact__greeting">
            <h1 className="contact__greeting--email"><a href="mailto:info@aechelon.online">info@aechelon.online</a></h1>
            <h1 className="contact__greeting--phone"><a href="tel:8174870886">817.487.0886</a></h1>
          </div>
        </div>
    )
}