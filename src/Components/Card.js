import React from 'react'

export default function Card(props) {
    return (
        <div className={`techstack-page__flexbox-${props.id} techstack-flexbox`}>
            <h3 className="techstack-page__flexbox-text">{props.title}</h3>
        </div>
    )
}