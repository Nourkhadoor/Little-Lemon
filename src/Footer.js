import React from 'react';
import logo from './images/small logo.png';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
      <img src={logo} alt="Little Lemon" className="footer-logo" />
        <div className="hours-of-operation">
          <p>Hours of Operation</p>
          <p>Monday - Friday & Weekends:</p>
          <p>From 10:00 AM to 5:00 PM</p>
        </div>
        <div className="contact-info">
          <p>Contact Info</p>
          <p>2385 Maldove Way<br />Chicago, Illinois</p>
          <p>Phone: (629)-243-6827</p>
          <p>Email: info@littlelemon.com</p>
        </div>
      </div>
    </footer>




  );
}

export default Footer;
