import React, { lazy } from "react";
import "./Skills.css";

// Example skill icons (update paths as needed)
import html from "../../assets/html.png";
import css from "../../assets/css.png";
import js from "../../assets/js.png";
import ts from "../../assets/ts.png";
import react from "../../assets/react.png";
import redux from "../../assets/redux.png";
import node from "../../assets/node.png";
import mongo from "../../assets/mongo.png";

const skills = [
  { name: "HTML", icon: html },
  { name: "CSS", icon: css },
  { name: "JavaScript", icon: js },
  { name: "TypeScript", icon: ts },
  { name: "React", icon: react },
  { name: "Redux", icon: redux },
  { name: "NodeJS", icon: node },
  { name: "MongoDB", icon: mongo },
];

const Skills = () => (
  <section id="skills" className="skills-section">
    <h2 className="skills-title">My Skills</h2>
    <p className="skills-desc">
      Passionate about new Technologies, I keep exploring stuff. Here is the the Tech Stack I've worked with!
    </p>
    <div className="skills-grid">
      {skills.map((skill) => (
        <div className="skill-card" key={skill.name}>
          <img loading="lazy" src={skill.icon} alt={skill.name} className="skill-icon" />
          <span className="skill-label">{skill.name}</span>
        </div>
      ))}
    </div>
  </section>
);

export default Skills;