import React from 'react'
import styled, { keyframes } from 'styled-components'

export default function BioP2() {
    return (
        <Wrapper>Taking more control of my business website started with using online WYSIWYGs, but it didn't give me enough to tweak it the way I want. Enter: Frontend Development. My mind was blown to brand new possibilities!</Wrapper>
    )
}

const bottomMove = keyframes`
    0% {opacity: 0; transform: translateX(-200px);}
    50% {opacity: 0;}
    100% {opacity: 1; transform: translateX(0px);}
`

const Wrapper = styled.span`
    opacity: 0;
    animation: ${bottomMove} 3s ease-out forwards;
`
