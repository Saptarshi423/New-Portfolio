import React from "react";
import "./About.css";
import aboutImg from "../../assets/about_anime.gif"; // Use your illustration here

const About = () => (
  <section id="about" className="about-section">
    <div className="about-inner">
      <div className="about-left">
        <div className="about-progress-line"></div>
        <div className="about-header">
          <h2>My Experience</h2>
          <div className="about-contact">
            Saptarshi Kattyayan &nbsp;|&nbsp; +91-7896909864 &nbsp;|&nbsp; kattyayan75@gmail.com
          </div>
        </div>
        <div className="about-experience">
          <div className="job">
            <h3>Software Engineer</h3>
            <p><b>NORDSON INDIA – Bangalore (Sept 2022 – Present).</b></p>
            <ul>
              <li>
                Nordson is specialized in Research, Design, Manufacturing and Service of industrial measurement systems, combining extensive industry experience and the latest technology. Nordson products can be used in all processing steps of steel, aluminum or other non-ferrous metals and other materials to improve production and product quality.
              </li>
              <li>
                I worked on creating a next generation common UI platform from scratch for online measurement systems, integrating essential components for all Nordson software, reducing maintenance time and enhanced user monitoring of manufacturing <b>process proving my ability to build/enhance user interfaces.</b>
              </li>
              <li>
                <b>Skills</b>: ReactJS, JavaScript, TypeScript, CSS, HTML, NodeJS, JSON, Git, SQL, Python
              </li>
            </ul>
          </div>
          <div className="job">
            <h3>Associate Software Engineer</h3>
            <p><b>Accenture India – Bangalore (Jun 2021 – Aug 2022).</b></p>
            <ul>
              <li>
                Created web applications, overcoming complex bugs, and fixing issues in diverse environments. Developed and deployed sharepoint web parts to translate business and functional qualifications into substantial deliverables.
              </li>
              <li>
                <b>Skills</b>: ReactJS, JavaScript, TypeScript, CSS, HTML, ASP.NET, JSON, Git, SQL
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="about-right">
        <img src={aboutImg} alt="About illustration" className="about-img" />
      </div>
    </div>
  </section>
);

export default About;