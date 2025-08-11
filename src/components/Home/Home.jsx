import React from "react";
import "./Home.css";
import heroImg from "../../assets/home_anime.gif"; // Use your gif here

const Home = () => {
  return (
    <section className="home-outer">
      <div className="home-inner">
        <div className="home-left">
          <h1>
            Building digital <br />
            products, brands <br />
            <span className="accent">
              <span className="accent-icon">✺</span> experience.
            </span>
          </h1>
          <p className="desc">
            A <b>Software Engineer</b> and <b>Web Developer</b>.<br />
            I specialize in FullStack development, Responsive Web Apps,<br />
            and scalable system development.
          </p>
          <form className="home-form" onSubmit={e => e.preventDefault()}>
            <button className="connect-btn" type="submit">
              <a href="https://drive.google.com/file/d/1XiaLjev0Ni6SJ1kHOY4_e9qa4FhlBkQL/view?usp=sharing" style={{textDecoration:"none", color:"white"}}>View Resume</a>
            </button>
          </form>
        </div>
        <div className="home-right">
          <img src={heroImg} alt="Animated developer" className="hero-img" />
        </div>
      </div>
    </section>
  );
};

export default Home;