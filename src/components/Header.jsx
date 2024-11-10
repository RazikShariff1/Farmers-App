import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Header({ toggleDarkMode, isDarkMode }) {
  return (
    <header className={`header ${isDarkMode ? 'dark' : ''}`}>
      <h2>NammaFarmer</h2> {/* Update App Name */}
      <nav>
        <NavLink to="/" end activeClassName="active">Home</NavLink>
        <NavLink to="/features" activeClassName="active">Features</NavLink>
        <NavLink to="/how-it-works" activeClassName="active">How It Works</NavLink>
        <NavLink to="/testimonials" activeClassName="active">Testimonials</NavLink>
        <NavLink to="/contact" activeClassName="active">Contact</NavLink>
      </nav>
      <button className="cta-btn">Sign Up</button>
      <button className="toggle-dark-mode" onClick={toggleDarkMode}>
        {isDarkMode ? '☀️' : '🌙'}
      </button>
    </header>
  );
}
