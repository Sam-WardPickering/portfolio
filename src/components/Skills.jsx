import React from 'react'
import htmlIcon from "../icons/icons8-html-5.svg"
import cssIcon from "../icons/icons8-css3.svg"
import jsIcon from "../icons/icons8-javascript.svg"
import reactIcon from "../icons/icons8-react-native.svg"
import gitIcon from "../icons/icons8-git.svg"
import herokuIcon from "../icons/heroku-colour.svg"
import sqlIcon from "../icons/sqlfile.svg"
import figmaIcon from "../icons/figma-colour.svg"
import reduxIcon from "../icons/redux-colour.svg"

export default function Skills() {
  return (
    <div className="skills" id="skills">
        <h2>Skills & Tools</h2>
        <div className="skills-wrapper">
            <div className="first-set">
                
                
                <a href="https://en.wikipedia.org/wiki/HTML" target="_blank"><img src={htmlIcon} alt="" className="icon icon-card" /></a>
                  
                <a href="https://en.wikipedia.org/wiki/CSS" target="_blank"><img src={cssIcon} alt="" className="icon icon-card" /></a>
                
              

                <a href="https://en.wikipedia.org/wiki/JavaScript" target="_blank"><img src={jsIcon} alt="" className="icon icon-card"/></a>
                
            
                <a href="https://en.wikipedia.org/wiki/React_(JavaScript_library)" target="_blank"><img src={reactIcon} alt="" className="icon icon-card" /></a>
                

                <a href="https://en.wikipedia.org/wiki/Git" target="_blank"><img src={gitIcon} alt="" className="icon icon-card" /></a>
                
                <a href="https://en.wikipedia.org/wiki/SQL" target="_blank"><img src={sqlIcon} alt="" className="icon icon-card" /></a>

                <a href="https://en.wikipedia.org/wiki/Figma_(software)" target="_blank"><img src={figmaIcon} alt="" className="icon icon-card" /></a>

                <a href="https://en.wikipedia.org/wiki/Heroku" target="_blank"><img src={herokuIcon} alt="" className="icon icon-card" /></a>

                <a href="https://en.wikipedia.org/wiki/Redux_(JavaScript_library)" target="_blank"><img src={reduxIcon} alt="" className="icon icon-card" /></a>
            </div>
        </div>
    </div>
  )
}
