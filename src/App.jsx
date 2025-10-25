import React from 'react';
// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Projects from "./pages/Projects";
import Tools from "./pages/Tools";
import News from "./pages/News";
import Contact from "./pages/Contact";

// Шинэ компонентууд
import Calculator from "./components/Calculator";
import Hero from "./components/Hero";
import ServiceCard from "./components/ServiceCard";
import ProjectCard from "./components/ProjectCard";

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen font-sans">
        <Navbar />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/tools" element={<Calculator />} /> {/* Tools хуудсыг Calculator болголоо */}
            <Route path="/calculator" element={<Calculator />} />
            <Route path="/news" element={<News />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
