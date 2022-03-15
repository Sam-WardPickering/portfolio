import React from "react";
import sammy from '../images/me.png'


function About() {

    return(
        <>
            <div className="main-container" id="about">
                <img src={sammy} alt="a picture of me!" className="main-pic" />
                <div className="about-me">
                    <h2 className="about-header">About Me</h2>
                    <p>
                    I am a full-stack developer with a keen interest in using my skills to work on meaningful projects with a positive real-world impact.
                    </p>
                    <a href="">Download my resume</a>
                </div>
            </div>
        </>
    )
}

export default About