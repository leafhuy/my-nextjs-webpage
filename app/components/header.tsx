"use client";
import { useState, useEffect } from "react";
import Image from "next/image";

export default function Header() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "light";
    setTheme(savedTheme);
    document.body.classList.toggle("dark", savedTheme === "dark");
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.body.classList.toggle("dark", newTheme === "dark");
    localStorage.setItem("theme", newTheme);
  };

  return (
    <header className="header">
      <div className="container header-inner">
        {/* Logo */}
        <a href="#top" className="logo-page-link">
          <Image
            src="/assets/image/Logo.png"
            alt="Logo"
            width={40}      // chiều rộng logo
            height={40}     // chiều cao logo
          />
          LEAF
        </a>

        {/* Navigation */}
        <nav className="navA">
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
          <button className="theme-btn" onClick={toggleTheme}>
          {theme === "light" ? "🌙" : "☀️"}
        </button>
        </nav>

        {/* Theme Toggle */}
        
      </div>
    </header>
  );
}
