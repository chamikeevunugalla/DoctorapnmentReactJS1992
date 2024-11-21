// src/Header.js
import React from 'react';
import { Link } from 'react-router-dom';
import './App.css'

const Header = () => {
  return (
    <header className="bg-success py-3 shadow-sm">
      <nav className="container">
        <ul className="nav justify-content-center">
          <li className="nav-item">
            <Link className="nav-link text-dark fw-bold text-uppercase" to="/" title="make an appointment through home page">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-dark fw-bold text-uppercase" to="/about">
              About
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-dark fw-bold text-uppercase" to="/services">
              Services
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-dark fw-bold text-uppercase" to="/contact">
              Contact
            </Link>
          </li>
    
        </ul>
      </nav>
    </header>
  );
};

export default Header;
