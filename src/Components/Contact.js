import React from 'react'
import './Contact.scss'

export default function Contact() {
    return(
        <div className="contact">
          <img src={require('../images/pro-handshake-2.webp')} alt="Greg Luce headshot" className="contact__handshake-img" />
          <div className="contact__greeting">
            <h1 className="contact__greeting--email"><a href="mailto:aechelon.online@gmail.com">aechelon.online@gmail.com</a></h1>
            <h1 className="contact__greeting--phone"><a href="tel:8174870886">817.487.0886</a></h1>
          </div>
        </div>
    )
}