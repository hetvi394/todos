import React from 'react';
import './Footer.css';
 

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h2>Contact Us</h2>
          <p>Email: <a href="mailto:example@example.com">example@example.com</a></p>
          <p>Phone: +1234567890</p>
        </div>
        <div className="footer-section">
          <h2>Follow Us</h2>
          <ul className="social-links">
            <li><a href="#"> Instagram</a></li>
            <li><a href="#"> Facebbok</a></li>
            <li><a href="#"> Twitter</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 Your Website. All rights reserved.</p>
      </div>  
    </footer>
  );
};

export default Footer;
