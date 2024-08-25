import React from "react";
import "./Contact.css"; // Create a separate CSS file for styling

const Contact = () => {
  return (
    <div className="contact-container">
      <h1>Contact Us</h1>
      <div className="contact-info">
        <div className="contact-office">
          <h2>Jalgaon Office</h2>
          <p>7, Mahada Colony, Opp. Bank of Maharashtra, MIDC, Jalgaon</p>
        </div>
        <div className="contact-office">
          <h2>Bhusawal Office</h2>
          <p>Pandawada, Jalgaon Road, Near Technical High School, Bhusawal</p>
        </div>
        <div className="contact-details">
          <p className="contact-number">Tel: +91 9272100299</p>
          <p className="contact-mail">Mail: support@jalgaon.com</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
