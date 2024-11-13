import React from "react";
import resume from "../images/SamWardPickering_CV_2024.pdf"
import programmer from "../images/program.png"

function About() {

    return(
        <>
            <div className="main-container" id="about">
                <img src={programmer} alt="a picture of me!" className="main-pic" />
                <div className="about-me">
                    <h2 className="about-header">About Me</h2>
                    <p>
                    I am a full-stack developer and creative technologist currently working at Accenture.
                    <br></br>
                    <br></br>
                    I also bring knowledge and experience from my roots as small business owner and filmmaker and I am excited to have the opportunity to combine my technical skills and knowledge with my creative background to collaborate on meaningful projects as a part of a team!
                    <br></br>
                    <br></br>
                    In my spare time you will either find me out in nature on a hike, watching films (or writing them!), reading a good book or spending some quality time with friends and family.
                    </p>
                    <a className="resume-link" href={resume} download>Download my resume</a>
                </div>
            </div>
        </>
    )
}

export default About