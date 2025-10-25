// src/components/Navbar.jsx
import React from "react";  // <- энэ мөрийг нэм
import { Link } from "react-router-dom";
import { Menu } from "lucide-react";

export default function Navbar() {
  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto flex items-center justify-between p-4">
        <Link to="/" className="font-bold text-xl text-blue-700">
          Energy Cloud LLC
        </Link>
        <nav className="hidden md:flex space-x-6 text-gray-700">
          <Link to="/">Нүүр</Link>
          <Link to="/about">Бидний тухай</Link>
          <Link to="/services">Үйлчилгээ</Link>
          <Link to="/tools">Тооцоолол</Link>
          <Link to="/projects">Төслүүд</Link>
          <Link to="/news">Мэдээ</Link>
          <Link to="/contact">Холбоо барих</Link>
        </nav>
        <button className="md:hidden">
          <Menu />
        </button>
      </div>
    </header>
  );
}
