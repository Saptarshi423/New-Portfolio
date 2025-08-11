import React, { useState } from "react";
import "./Contact.css";

const Contact = () => {

  const handleSubmit = (e) => {
    e.preventDefault();
    // handle form submission (e.g., send email)
  };

  return (
    <section id="contact" className="contact-section">
      <h2 className="contact-title">Get in touch</h2>
      <p className="contact-desc">
        Want to connect? Feel free to drop me an email.
      </p>
      <form className="contact-form" onSubmit={handleSubmit} action="https://formspree.io/f/xbjwalwa">
        <input
          className="contact-email"
          type="email"
        />
        <textarea
          className="contact-message"
          placeholder="Type your message..."
          rows={7}
        />
        <button className="contact-btn" type="submit">
          Send Email
        </button>
      </form>
    </section>
  );
};

export default Contact;