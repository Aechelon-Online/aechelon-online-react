import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

export default function Card(props) {
    return (
        <div className={`techstack-page__flexbox-${props.id} techstack-flexbox`}>
            <Scaled className="techstack-page__flexbox-text">{props.title}</Scaled>
        </div>
    )
}

const Scaled = styled.h3`
    color: white;
    font-size: clamp(1.5rem, 10vw, 4rem);
    margin: 2vh 0;
    font-family: Lato, sans-serif;
    

    &:hover {
        cursor: pointer;
        transform: scale(2);
        text-shadow:
        0 0 5px rgba(255, 255, 255, 1),
		0 0 10px rgba(255, 255, 255, 1),
		0 0 20px rgba(255, 255, 255, 1),
		0 0 30px rgba(255, 255, 255, 1);
    }
`