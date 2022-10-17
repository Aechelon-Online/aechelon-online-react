import React from 'react'
import styled, { keyframes } from 'styled-components'

export default function BioP1() {
    return (
        <Wrapper>Now, I do freelance part-time development that implements the skills in my ever-growing tech-stack, while having fun making my clients supremely satisfied.</Wrapper>
    )
}

const bottomMove = keyframes`
    0% {opacity: 0; transform: translateX(-200px);}
    70% {opacity: 0;}
    100% {opacity: 1; transform: translateX(0px);}
`

const Wrapper = styled.span`
    opacity: 0;
    animation: ${bottomMove} 4.5s ease-out forwards;
`
