import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import About from "./pages/About.js";
import Blog from "./pages/Blog.js";
import Contact from "./pages/Contact.js";
import Resume from "./pages/Resume.js";
import './styles/generated.css';
import Header from "./components/Header.js";



export default function App() {
  return (
    <div>
      <h1>Hi, this is my website</h1>
      <Header />
    </div>
  );
};
