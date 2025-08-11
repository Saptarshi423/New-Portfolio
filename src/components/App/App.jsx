import React, {lazy, Suspense} from "react";

import NavBar from "../NavBar/NavBar";
import GoHome from "../GoHome/GoHome";
import Home from "../Home/Home";
import About from "../About/About";
//import Projects from "../Projects/Projects";
import Skills from "../Skills/Skills";
import Contact from "../Contact/Contact";


const Projects = lazy(() => import("../Projects/Projects"));

const App = () => {
  return (
    <div>
      <NavBar />
      <div id="home" className="section">
        <Home />
      </div>
      <div id="about" className="section">
        <About />
      </div>
      <div id="projects" className="section">
        <Suspense fallback={<div>Loading Projects...</div>}>
          <Projects />
        </Suspense>
      </div>
      <div id="skills" className="section">
        <Skills />
      </div>
      <div id="contact" className="section">
        <Contact />
      </div>
      <GoHome />
    </div>
  );
};

export default App;