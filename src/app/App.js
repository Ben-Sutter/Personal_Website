/**
 * The main component of the application.
 * Renders the header and routes to different pages based on the URL path.
 *
 * @returns {JSX.Element} The rendered App component.
 */
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./Header";
import Blog from "../pages/Blog";
import Resume from "../pages/Resume";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Home from "../pages/Home";

const App = () => {
  return (
    <Router>
      <div className="bg-purple-200 min-h-screen">
        <Header />
        <div className="pt-20">
          <Routes>
            <Route path="/blog" element={<Blog />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/" element={<Home />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
