import React from 'react'
import './NavHamburger.scss'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { useState } from 'react'


export default function NavHamburger() {
    const [navOpen, setNavOpen] = useState(false)
    const [menuOpen, setMenuOpen] = useState(false)

    const handleClick = () => {
        setNavOpen(prev => !prev)
        setMenuOpen(prev => !prev)
    } 
    

    return (
        <div className="nav-block" onClick={handleClick}>
            <Toggle isOn={navOpen} />
            <Drop 
                isDown={menuOpen} 
                className="navbar__anchor--links">
                <Link to="build/bio">Bio</Link>
            </Drop>
            <Drop 
                isDown={menuOpen}
                className="navbar__anchor--links">
                <Link to="build/techstack">TechStack</Link>
            </Drop>
            <Drop 
                isDown={menuOpen}
                className="navbar__anchor--links">
                <Link to="build/contact">Contact</Link>
            </Drop>
        </div>
       
    )
}


const Toggle = styled.div`
    top: 7vh;
    right: 7vw;
    background-color: ${(props) => (props.isOn === true ? 'transparent' : '#fff')};
    position: absolute;
    height: 6px;
    width: 20px;
    transition: background-color 400ms cubic-bezier(0.23, 1, 0.32, 1);
    border-radius: 2px;
    
    &:before {
        content: '';
        margin-top: ${(props) => (props.isOn === true ? '0px' : '11px')};
        right: 0;
        background-color: #fff;
        position: absolute;
        height: 6px;
        width: 30px;
        transition: transform 400ms cubic-bezier(0.23, 1, 0.32, 1);
        border-radius: 2px;
        transform: rotate(${(props) => (props.isOn === true ? '405' : '0')}deg);
    }

    &:after {
        content: '';
        margin-top: ${(props) => (props.isOn === true ? '0px' : '-11px')};
        right: 0;
        background-color: #fff;
        position: absolute;
        height: 6px;
        width: 30px;
        transition: transform 400ms cubic-bezier(0.23, 1, 0.32, 1);
        border-radius: 2px;
        transform: rotate(${(props) => (props.isOn === true ? '-405' : '0')}deg);
    }

`

const Drop = styled.li`
    position: relative;
    text-align: center;
    background: #222;
    top: 15vh;
    height: ${(props) => (props.isDown) ? '5vh' : '0'};
    font-size: ${(props) => (props.isDown) ? '1.2rem' : '0'};
    align-items: center;
    width: 120px;
    padding: ${(props) => (props.isDown) ? '0.5em' : '0'};
    border: ${(props) => (props.isDown) ? '1px solid #333' : '0'};
    transition: all 400ms cubic-bezier(0.23, 1, 0.32, 1);
`