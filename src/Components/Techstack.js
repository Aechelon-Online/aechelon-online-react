import React from 'react'
import Card from './Card'
import techLabels from './techLabels'
import './Container.scss'
import './Techstack.scss'



export default function Techstack() {
    const labels = techLabels.map(label => {
        return(
            <Card
            key={label.id}
            {...label}
            />
        )
    })
    return (
        <div className="container">
            <div className="techstack-page">
                <img src={require('../images/anatomy-website.webp')} alt="Technical website design demo" className="techstack-page__design-img" />
                <div className="techstack-page__box">
                    {labels}
                </div>
            </div>
        </div>
    )
    
}