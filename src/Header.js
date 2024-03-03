import React from 'react';
import { Link } from 'react-router-dom';
import logo from './images/logo.jpg';

function Header() {
  return (
    <header className="header">
      <div className="logo-container">
        <img src={logo} alt="Little Lemon" className="logo" />
      </div>
      <nav className="nav">
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/">About</a></li>
          <li><a href="/">Menu</a></li>
          <li><Link to="/reservations">Reservations</Link></li>
          <li><a href="/">Order Online</a></li>
          <li><a href="/">Login</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
