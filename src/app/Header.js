import { Link } from 'react-router-dom';
import '../styles/generated.css';

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 bg-blue-600 text-white shadow-md">
        <div className="container mx-auto flex justify-between items-center p-5">
          <h1 className="font-bold text-4xl">Ben Sutter</h1>
          <ul className="flex space-x-4">
            <li><button className="px-3 py-2 rounded bg-white text-blue-600"><Link to="/blog">Blog</Link></button></li>
            <li><button className="px-3 py-2 rounded bg-white text-blue-600"><Link to="/resume">Resume</Link></button></li>
            <li><button className="px-3 py-2 rounded bg-white text-blue-600"><Link to="/about">About Me</Link></button></li>
            <li><button className="px-3 py-2 rounded bg-white text-blue-600"><Link to="/contact">Contact</Link></button></li>
            <li><button className="px-3 py-2 rounded bg-white text-blue-600"><a href="https://github.com">GitHub</a></button></li>
          </ul>
        </div>
    </header>
  );
};

export default Header;