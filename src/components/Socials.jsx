import React from 'react'
import linkedin from '../icons/linkedin.gif'
import github from '../icons/github.gif'

export default function Socials() {
  return (
    <div className="socials">
      <a href="https://www.linkedin.com/in/sam-ward-pickering-144005123/" target="_blank">
        <img src={linkedin} alt="Linkedin" className="socicon"/>
      </a>

      <a href="https://github.com/Sam-WardPickering" target="_blank">
        <img src={github} alt="Github" className="socicon"/>
      </a>
    </div>
  )
}
