import React, { useState } from "react";
import { GiHamburgerMenu } from 'react-icons/gi'

function Nav () {

    const [navOpen, setNavOpen] = useState(false)

    return(
       <> 
        <div className="header-container">
            <a className="name-link" href="#"><h1 className="header-name">Sam Ward-Pickering</h1></a>
            <ul className="link-list">
                {/* <li><a href="#about" className="nav-link">About</a></li> */}
                <li><a href="#projects" className="nav-link">Projects</a></li>

                <li><a href="#skills" className="nav-link">Skills</a></li>
                
                <li><a href="#contact" className="nav-link">Contact</a></li>
            </ul>
            {/* <button className="burger-menu" id="burger-menu">
                 <GiHamburgerMenu/>
            </button> */}
            
        </div>
       </>
    )
}

export default Nav