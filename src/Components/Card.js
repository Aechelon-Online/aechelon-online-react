import React from 'react'
import styled from 'styled-components'

export default function Card(props) {
    return (
        <div className={`techstack-page__flexbox-${props.id} techstack-flexbox`}>
            <Scaled className="techstack-page__flexbox-text">
                <a target="_blank" href={props.url}>
                    {props.title}
                </a> 
            </Scaled>
           
        </div>
    )
}

const Scaled = styled.h3`
    
    position: relative;
    font-size: clamp(1.5rem, 10vw, 4rem);
    display: flex;
    justify-content: center;
    margin: 2vh 0;
    font-family: Lato, sans-serif;
    transform: scale(1);
    transition: 200ms;
    & a {
        color: white;
    }
    

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
const DemoButton = styled.button`
    
    border-radius: 10px;
    margin-right: 5px;
    width: clamp(50px, 5vw, 100px);
    font-size: clamp(0.2rem, 2vw, 1rem);
`

const CodeButton = styled.button`
    
    border-radius: 10px;
    margin-left: 5px;
    width: clamp(50px, 5vw, 100px);
    font-size: clamp(0.2rem, 2vw, 1rem);
`

const ButtonDiv = styled.div`
    
    position: absolute;
    top: 40%;
    display: flex;
`