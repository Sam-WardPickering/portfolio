import React from 'react'
import resolute from '../images/resolute.png'
import tewhare from '../images/tewhare.png'
import pizzafun from '../images/pizzaFun.png'

export default function Projects() {
  return (
    <div className="projects" id="projects">

      <h2 className="projects-title">Recent Projects</h2>

      <div className="projects-container">

        <div className="project-container project-card">
          <img src={resolute} alt="a goal tracking app" className="project-pic" />
          <h3 className="project-title">Resolute</h3>
          <p className="project-details">
            An application to track your New Years Resolutions. Built using React, Redux, SQL, JavaScript and HTML.
          </p>
          <a href="https://github.com/Sam-WardPickering/resolute" target="_blank" className="project-link">View Repository</a>
        </div>

        <div className="project-container project-card">
          <img src={tewhare} alt="a wellness application" className="project-pic" />
          <h3 className="project-title">Te Whare Tapa Whā</h3>
          <p className="project-details">
            An customisable wellness planning application based on the key principles of Te Whare Tapa Whā.
          </p>
          <a href="https://github.com/Sam-WardPickering/whare-tapa-wha" target="_blank" className="project-link">View Repository</a>
        </div>

        <div className="project-container project-card">
          <img src={pizzafun} alt="a more family-friendly version of hangman" className="project-pic" />
          <h3 className="project-title">Pizza Fun</h3>
          <p className="project-details">
            A family friendly version of hangman that uses pizza. Pretty self-explanatory! 
          </p>
          <a href="https://github.com/Sam-WardPickering/pizza-fun" target="_blank" className="project-link">View Repository</a>
        </div>
      </div>
    </div>
  )
}
