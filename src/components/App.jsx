import React from "react";
import Nav from './Nav'
import About from './About'
import MoreAbout from "./MoreAbout";
import Skills from "./Skills";
import Projects from "./Projects";
import Contact from "./Contact";
import Socials from "./Socials";
import Footer from "./Footer";


function App() {
  return (
    <div className="App">
      <Nav/>
      <About/>
      {/* <MoreAbout/> */}
      <Projects/>
      <Skills/>
      <Contact/>
      <Socials/>
      <Footer/>
    </div>
  );
}

export default App;
