import React from 'react'
import { Link } from 'react-router-dom'



export default function Navbar() {
    return (
    <div className="navbar">
      <div className="navbar__front">
        <div className="navbar__front--brand">
          <div className="navbar__front--img">
            <Link to="aechelon-online-react" ><img src={require(`../images/ae-orange-circle.png`)} alt="Aechelon Online Logo in Circle" className="navbar__front--img-logo" />
            </Link>
          </div>
          <div className="navbar__front--title">Æchelon Online</div>
        </div>
        <div className="navbar__front--ul">
          {/* <input id="menu-toggle" type="checkbox" />
          <label className='menu-button-container' for="menu-toggle">
            <div className='menu-button'></div>
          </label> */}
          <ul className="navbar__front--links">
            <li className="navbar__anchor--links"><Link to="aechelon-online-react/build/bio">Bio</Link></li>
            <li className="navbar__anchor--links"><Link to="aechelon-online-react/build/techstack">TechStack</Link></li>
            <li className="navbar__anchor--links"><Link to="aechelon-online-react/build/contact">Contact</Link></li>
          </ul>
        </div>
      </div>
    </div>
    )
}



