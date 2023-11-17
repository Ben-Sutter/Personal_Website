
import React from 'react';
import '../styles/generated.css';

const Header = () => {
  return (
    <header style={{ position: 'fixed', top: 0, left: 0, right: 0 }}>
        <ul style={{ display: 'flex', justifyContent: 'space-around', listStyle: 'none' }}>
          <li><button><a href="/blog">Blog</a></button></li>
          <li><button><a href="/resume">Resume</a></button></li>
          <li><button><a href="/about">About Me</a></button></li>
          <li><button><a href="/contact">Contact</a></button></li>
          <li><button><a href="https://github.com">GitHub</a></button></li>
        </ul>
    </header>
  );
};

export default Header;