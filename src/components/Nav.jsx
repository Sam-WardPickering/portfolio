import React from "react";
import { GiHamburgerMenu } from 'react-icons/gi'


function Nav () {

    return(
       <> 
            {/* <script>
                const burger = document.querySelector("#burger-menu");
                const ul = document.querySelector("nav ul");
                const nav = document.querySelector("nav");

                burger.addEventListener("click", () => {
                    ul.classList.toggle("show");
                });
            </script> */}
    
        

        <div className="header-container">
            <h1 className="header-name">Sam Ward-Pickering</h1>
            <ul className="link-list">
                <li><a href="#about" className="nav-link">About</a></li>
                <li><a href="#skills" className="nav-link">Skills</a></li>
                <li><a href="#projects" className="nav-link">Projects</a></li>
                <li><a href="#contact" className="nav-link">Contact</a></li>
            </ul>
            <button className="burger-menu" id="burger-menu">
                <GiHamburgerMenu/>
            </button>
            
        </div>
       </>
    )
}

export default Nav