import React from 'react'

export default function Front() {
    return (
    <div className="intro">
        <img src={require("../images/ae-orange-circle.png")} alt="background aechelon online logo" className="intro__logo-img" />
        <div className="intro__paragraph">
          <h1 className="intro__greeting">Frontend Developer</h1>
          <h2 className="intro__greeting-2">Working With Modern Coding Implementaion To Present A High-Profile Online Presence</h2>
        </div>
    </div>
    )
}