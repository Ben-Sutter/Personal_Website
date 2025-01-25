import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Container } from 'react-bootstrap';
import Header from "./Header";
import Blog from "../pages/Blog";
import Resume from "../pages/Resume";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Home from "../pages/Home";
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  document.title = "BENBENBENBENBENBENBENBENBENBENBENBENBENBEN";
  return (
    <Router>
      <Container fluid className="bg-light min-vh-100 d-flex flex-column">
        <Header />
        <Container className="pt-5 flex-grow-1">
          <Routes>
            <Route path="/blog" element={<Blog />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/" element={<Home />} />
          </Routes>
        </Container>
      </Container>
    </Router>
  );
};

export default App;