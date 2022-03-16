import React from 'react'
import resolute from '../images/resolute-smaller.png'
import tewhare from '../images/tewhare.png'
import pizzafun from '../images/pizzafunsmall.png'
import memegenerator from '../images/memegenerator.png'

export default function Projects() {
  return (
    <div className="projects" id="projects">

      <h2 className="projects-title">Most Recent Projects</h2>

      <div className="projects-container">

        <div className="project-container project-card">
          <img src={resolute} alt="a goal tracking app" className="project-pic resolute-pic" />
          <h3 className="project-title">Resolute</h3>
          <p className="project-details">
            An application to track your New Years Resolutions. Built using React, Redux, SQL, JavaScript and HTML.
          </p>
          <a href="https://github.com/Sam-WardPickering/resolute" target="_blank" className="project-link">View</a>
        </div>

        <div className="project-container project-card">
          <img src={tewhare} alt="a wellness application" className="project-pic" />
          <h3 className="project-title">Te Whare Tapa Whā</h3>
          <p className="project-details">
            An customisable wellness planning application based on the key principles of Te Whare Tapa Whā.
          </p>
          <a href="https://github.com/Sam-WardPickering/whare-tapa-wha" target="_blank" className="project-link">View</a>
        </div>

        <div className="project-container project-card pizza-fun">
          <img src={pizzafun} alt="a more family-friendly version of hangman" className="project-pic" />
          <h3 className="project-title">Pizza Fun</h3>
          <p className="project-details">
            A super fun, family friendly version of hangman that uses pizza. Built for a group project. 
          </p>
          <a href="https://github.com/Sam-WardPickering/pizza-fun" target="_blank" className="project-link">View</a>
        </div>

        <div className="project-container project-card">
          <img src={memegenerator} alt="a more family-friendly version of hangman" className="project-pic" />
          <h3 className="project-title">Meme Generator</h3>
          <p className="project-details">
            A fun coding project I worked on with a friend. Loops through popular meme templates and allows you to add text.  
          </p>
          <a href="https://sam-wardpickering.github.io/memegenerator/" target="_blank" className="project-link">View</a>
        </div>
      </div>
    </div>
  )
}
