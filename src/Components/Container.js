import React from 'react'
import Front from './Front'
import "./Front.scss"
import './About.scss'
import About from './About'

export default function Container() {
    return (
        <div className="container">
            <Front />
            <About />
        </div>
    )
}