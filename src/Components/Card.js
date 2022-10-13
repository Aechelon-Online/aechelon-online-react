import React from 'react'

export default function Card(props) {
    return (
        <div className={`techstack-page__flexbox-${props.id} techstack-flexbox`}>
            <div className={`techstack-page__flexbox-${props.id}-img`}>
                {/* <span className="demo-button">
                    <input className="example-button" type="button" value="Demo">
                    <input className="code-button" type="button" value="Code">
                </span> */}
            </div>
            <h3 className="techstack-page__flexbox-text">{props.name}</h3>
        </div>
    )
}