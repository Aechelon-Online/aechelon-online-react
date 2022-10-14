import React from 'react'
import styled, { keyframes } from 'styled-components'

export default function Title() {
    return (
        <Wrapper>Frontend Developer</Wrapper>
    )
}

const fadeIn = keyframes`
    0% {opacity: 0; transform: scale(1.2);}
    100% {opacity: 1; transform: scale(1)}
`

const Wrapper = styled.span`
    opacity: 0;
    animation: ${fadeIn} 1s forwards;
`