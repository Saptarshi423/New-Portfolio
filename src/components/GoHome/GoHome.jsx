import React from "react";
import Home from '../../assets/home_black.png'; // Use your home icon here

const GoHome = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <button onClick={scrollToTop} style={styles.button}>
      <img src={Home} style={styles.img}/>
    </button>
  );
};

const styles = {
  button: {
    position: 'fixed',
    bottom: '20px',
    right: '20px',
    color: '#fff',
    border: 'none',
    borderRadius: '50px',
    cursor: 'pointer',
    zIndex: 1000,
  },
  img:{
    width:"50px",
    height:"54px"
  }
};

export default GoHome;