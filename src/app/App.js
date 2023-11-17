import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from '../components/Header';
import Blog from '../pages/Blog';
import Resume from '../pages/Resume';
import About from '../pages/About';
import Contact from '../pages/Contact';

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="./blog" element={<Blog />} />
        <Route path="./resume" element={<Resume />} />
        <Route path="./about" element={<About />} />
        <Route path="./contact" element={<Contact />} />
      </Routes>
    </Router>
  );
};

export default App;