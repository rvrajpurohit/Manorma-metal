import React from 'react';
import './Footer.css'; // Import the CSS file for the footer styles

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__content">
        <div className="footer__contact">
          <h2>Contact Us</h2>
          <br />
          <h3>Manorma Metal</h3>
          <p>Shop no. 4, second floor</p>
          <p>Ekta complex, nr. ajay estate</p>
          <p> Rakhiyal Ahmedabad Gujrat(380023)</p>
          <p>Email: manormametal2020@gmail.com</p>
          <p>Phone: +91-7990685090</p>
        </div>
        <div className="footer__links">
          <h2>Quick Links</h2>
          <br />
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/products">Products</a>
            </li>
            <li>
              <a href="/about">About Us</a>
            </li>
            <li>
              <a href="/contact">Contact Us</a>
            </li>
          </ul>
        </div>
        <div className="footer__social">
          <h2>Follow Us</h2>
          <div className="footer__social-icons">
            {/* Replace the links with your metal supplier's social media links */}
            <a href="" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>
      </div>
      <div className="footer__copyright">
        <p>&copy; {new Date().getFullYear()} Metal Supplier. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
