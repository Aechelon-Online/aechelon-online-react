import React from 'react'
import styled, { keyframes } from 'styled-components'

export default function BioP1() {
    return (
        <Wrapper>My motto: Coder by day, Rockstar by night. My "day job" is a working musician, but now my passion is coding.</Wrapper>
    )
}

const bottomMove = keyframes`
    0% {opacity: 0; transform: translateX(-200px);}
    30% {opacity: 0;}
    100% {opacity: 1; transform: translateX(0px);}
`

const Wrapper = styled.span`
    opacity: 0;
    animation: ${bottomMove} 1.5s ease-out forwards;
`
