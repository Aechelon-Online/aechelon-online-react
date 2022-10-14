import React from 'react'
import styled, { keyframes } from 'styled-components'

export default function bottomGreeting() {
    return (
        <Wrapper>To Present A High-Profile Online Presence</Wrapper>
    )
}

const bottomMove = keyframes`
    0% {opacity: 0; transform: translateX(-200px);}
    50% {opacity: 0;}
    100% {opacity: 1; transform: translateX(0px);}
`

const Wrapper = styled.span`
opacity: 0;
animation: ${bottomMove} 1.5s ease-out forwards;
`