import React from 'react'
import Title from './Title'
import TopGreeting from './TopGreeting'
import BottomGreeting from './BottomGreeting'

export default function Front() {
    return (
    <div className="intro">
        <img src={require('../images/ae-orange-circle.webp')} alt="background aechelon online logo" className="intro__logo-img" />
        <div className="intro__paragraph">
          <h1 className="intro__greeting"><Title /></h1>
          <h2 className="intro__greeting-2"><TopGreeting /></h2>
          <h2 className="intro__greeting-2"><BottomGreeting /></h2>
        </div>
    </div>
    )
}