import React from 'react'

import "./Front.scss"
import './About.scss'
import './Portfolio.scss'
import './ContactIntro.scss'
import Front from './Front'
import About from './About'
import Portfolio from './Portfolio'
import ContactIntro from './ContactIntro'

export default function Container() {
    return (
        <div className="container">
            <Front />
            <About />
            <Portfolio />
            <ContactIntro />
        </div>
    )
}