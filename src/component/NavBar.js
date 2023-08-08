import React, { useState } from "react";
import "./NavBar.css";

export default function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="site-header">
      <div className="site-header-wrap">
        <div className="site-header-top">
          <div className="container">
            <div className="header-top-left">
              <a href="" className="site-logo" title="Manorma Metal" rel="home">
                <img
                  className="img-logo"
                  src="./ravi-logo.png"
                  alt="Manorma Metal"
                  width="30px"
                  height="30px"
                />
              </a>
              <span className="header-title">Manorma Metal</span>
            </div>
            <div className="header-top-right">
              <a href="https://www.facebook.com" className="icon">
                <i className="fab fa-facebook"></i>
              </a>
              <a href="https://www.linkedin.com" className="icon">
                <i className="fab fa-linkedin"></i>
              </a>
              <a href="https://www.instagram.com" className="icon">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="https://mail.google.com" className="icon">
                <i className="fas fa-envelope"></i>
              </a>
            </div>
            <div className="menu-toggle" onClick={toggleMenu}>
              <i className={`fa ${menuOpen ? "fa-times" : "fa-bars"}`} />
            </div>
          </div>
        </div>
        <div className="title-container">
          <div className="container">
            <div className="site-branding">
              <a href="" className="site-logo" title="Manorma Metal" rel="home">
                <img
                  src="./ravi.png"
                  alt="Manorma Metal"
                  width="150px"
                  height="130px"
                />
              </a>
            </div>
            <div className="site-header-contact">
              <div className="site-contact-item">
                <div className="icon-image">
                  <i class="fa fa-phone" aria-hidden="true"></i>
                </div>
                <div className="contact-holder">
                  <label className="label-holder">
                    Call Us: +91- 7990685090
                  </label>
                  <span>manormametal2020@gmail.com</span>
                </div>
              </div>
              <div className="site-contact-item">
                <div className="icon-image">
                  <i class="fa fa-calendar" aria-hidden="true"></i>
                </div>
                <div className="contact-holder">
                  <label className="label-holder">
                    Mon - Sat: 8.00am -9.00pm
                  </label>
                  <span>Sunday: Closed</span>
                </div>
              </div>
              <div className="site-contact-item">
                <div className="icon-image">
                  <i class="fa fa-map-marker" aria-hidden="true"></i>
                </div>
                <div className="contact-holder">
                  <label className="label-holder">
                    Address: Shop no.4, Second Floor,Ekta Complex
                  </label>
                  <span>Kewal Katha Rakhial, Ahmedabad - 380023</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="site-menu">
          <div className="container">
            <div className={`site-navigation ${menuOpen ? "show" : "hide"}`}>
              <nav className={`main-navigation ${menuOpen ? "show" : "hide"}`}>
                <ul className='primary-menu'>
                  <li className="menu-item">
                    <a href="/">HOME</a>
                  </li>
                  <li className="menu-item">
                    <a href="/about">ABOUT US</a>
                  </li>
                  <li className="menu-item">
                    <a href="/products">PRODUCTS</a>
                  </li>
                  <li className="menu-item">
                    <a href="/contact">CONTACT US</a>
                  </li>
                </ul>
              <div className="header-button">
                <a href="/contact" className="btn">
                  GET A QUOTE
                  <i class="fa fa-arrow-right" aria-hidden="true"></i>
                </a>
              </div>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
