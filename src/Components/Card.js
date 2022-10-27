import React from 'react'
import styled, { keyframes } from 'styled-components'
import './Card.scss'

export default function Card(props) {
    return (
        <div className={`techstack-page__flexbox-${props.id} techstack-flexbox`}>
            <Scaled className="techstack-page__flexbox-text">
                <a target="_blank" href={props.url}>
                    {props.title}
                </a> 
                <ButtonDiv>
                    <DemoButton><a target="_blank" href={props.demo}>Demo</a></DemoButton>
                    <CodeButton><a target="_blank" href={props.code}>Code</a></CodeButton>
                </ButtonDiv>
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
        cursor: alias;
        transform: scale(2);
        text-shadow:
        0 0 5px rgba(255, 255, 255, 1),
		0 0 10px rgba(255, 255, 255, 1),
		0 0 20px rgba(255, 255, 255, 1),
		0 0 30px rgba(255, 255, 255, 1);
    }
`
const DemoButton = styled.button`
    
    cursor: pointer;
    background: red;
    color: white;
    border-radius: 10px;
    margin-right: 5px;
    width: fit-content;
    height: fit-content;
    font-size: clamp(0.2rem, 2vw, 1rem);

`

const CodeButton = styled.button`
    
    cursor: pointer;
    background: blue;
    color: white;
    border-radius: 10px;
    margin-left: 5px;
    width: fit-content;
    height: fit-content;
    font-size: clamp(0.2rem, 2vw, 1rem);
    
`

const buttonShow = keyframes`
    0% {opacity: 0;}
    100% {opacity: 1;}
`

const ButtonDiv = styled.div`
    
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    opacity: 0;
    height: clamp(50px, 15vw, 95px);
    

    &:hover {
        animation: ${buttonShow} 400ms ease-in forwards;
    }
`

