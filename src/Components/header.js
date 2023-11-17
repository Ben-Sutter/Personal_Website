import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/generated.css';

const Header = () => {
  return (
    <header style={{ position: 'fixed', top: 0, left: 0, right: 0 }}>
      <nav>
        <ul style={{ display: 'flex', justifyContent: 'space-around', listStyle: 'none' }}>
          <li><Link to="/blog">Blog</Link></li>
          <li><Link to="/resume">Resume</Link></li>
          <li><Link to="/about">About Me</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li><a href="https://github.com">GitHub</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;