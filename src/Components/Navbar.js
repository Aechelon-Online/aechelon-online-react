import React from 'react'
import { Link } from 'react-router-dom'
import Media from 'react-media'
import NavHamburger from './NavHamburger'
import './NavHamburger.scss'



export default function Navbar() {
    return (
    <div className="navbar">
      <div className="navbar__front">
        <div className="navbar__front--brand">
          <div className="navbar__front--img">
            <Link to="/" ><img src={require(`../images/ae-orange-circle.webp`)} alt="Aechelon Online Logo in Circle" className="navbar__front--img-logo" />
            </Link>
          </div>
          <div className="navbar__front--title">Æchelon Online</div>
        </div>
        <div>
          <Media query="(min-width: 600px)">
            {matches => {
              return (matches ? 
                <ul className="navbar__front--links">
                  <li className="navbar__anchor--links"><Link to="/bio">Profile</Link></li>
                  <li className="navbar__anchor--links"><Link to="/techstack">TechStack</Link></li>
                  <li className="navbar__anchor--links"><Link to="/contact">Contact</Link></li>
                </ul>
                : <NavHamburger />
              )
            }}
          </Media>
        </div>
      </div>
    </div>
    )
}



