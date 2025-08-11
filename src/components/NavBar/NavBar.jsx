import React, { useEffect, useState } from "react";
import "./NavBar.css";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";

const NavBar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`top-navbar${scrolled ? " navbar-scrolled" : ""}`}>
      <div className="nav-inner">
        <div className="nav-left">
          {/* <img src={avatar} alt="Logo" className="nav-avatar" /> */}
        </div>
        <nav className="nav-center">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#skills">Skills</a>
          <a href="#contact">Contact</a>
        </nav>
        <div className="nav-right">
          <a href="https://github.com/Saptarshi423?tab=repositories" target="_blank" rel="noopener noreferrer" className="nav-icon"><FaGithub /></a>
          <a href="https://www.linkedin.com/in/saptarshi-kattyayan-3220a6163/" target="_blank" rel="noopener noreferrer" className="nav-icon"><FaLinkedinIn /></a>
        </div>
      </div>
    </header>
  );
};

export default NavBar;