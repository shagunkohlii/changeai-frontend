import React, { useState } from 'react';
import './Navbar.css'; // We'll create this file for the styles

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
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
            <a href="home" className="nav-link">Home</a>
          </li>
          <li className="nav-item">
            <a href="#projects" className="nav-link">Projects</a>
          </li>
          <li className="nav-item">
            <a href="#services" className="nav-link">Services</a>
          </li>
          <li className="nav-item">
            <a href="#faq" className="nav-link">FAQ</a>
          </li>
          <li className="nav-item contact-button">
            <a href="#contact" className="nav-link contact">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;