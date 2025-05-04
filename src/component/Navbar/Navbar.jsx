import React, { useState } from 'react';
// import { Link } from "react-router-dom";
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };


  const handleScroll = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false); // close mobile menu after click
    }
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <div className="logo-circle">
            <span className="logo-icon">♻</span>
          </div>
          <span className="logo-text">ChangeAI</span>
        </div>

        {/* Hamburger button */}
        <div className="mobile-menu-button" onClick={toggleMenu}>
          <div className={`menu-icon ${isOpen ? 'open' : ''}`}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>

        {/* Navigation links */}
        <ul className={`nav-menu ${isOpen ? 'active' : ''}`}>
          <li className="nav-item">
            <a href='#home' className="nav-link" onClick={() => handleScroll("home")}>Home</a>
          </li>
          <li className="nav-item">
            <a href="#About" className="nav-link" onClick={() => handleScroll("about")}>About</a>
          </li>
          {/* <li className="nav-item">
            <a href="#services" className="nav-link">Projects</a>
          </li> */}
          <li className="nav-item">
            <a href="#team" className="nav-link" onClick={() => handleScroll("team")}>Team</a>
          </li>
          <li className="nav-item contact-button">
            <a href="#contact" className="nav-link" onClick={() => handleScroll("contact")}>Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;