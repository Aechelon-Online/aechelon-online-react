import React from 'react'
import "./App.scss"
import Navbar from './Components/Navbar'
import Bio from './Components/Bio'
import Techstack from './Components/Techstack'
import Contact from './Components/Contact'
import Container from './Components/Container'
import "./Components/Navbar.scss"
import "./Components/Card.scss"
import './Components/Container.scss'
import './Components/Front.scss'
import { Routes, Route } from 'react-router-dom'



export default function App() {

    return(
        <div className="App">
            <Navbar />
            <Routes>
                <Route exact path="build/bio" element={<Bio />} />
                <Route exact path="build/techstack" element={<Techstack />} />
                <Route exact path="build/contact" element={<Contact />} />
            </Routes>
            <Container />
        </div>
    )
}
