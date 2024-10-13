import React from 'react';
import { Link } from 'react-router-dom';
import './styles/Nav.css';

function Nav() {
  return (
    <nav className="nav">
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="about">About</Link></li>
        <li><Link to="education">education</Link></li>
        <li><Link to="/potfolio">portfolio</Link></li>
        <li><Link to="contact">contact</Link></li>
      </ul>
    </nav>
  );
}

export default Nav;