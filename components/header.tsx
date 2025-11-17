"use client";
import React, { useState, useEffect } from "react";

export default function Header() {
  const [theme, setTheme] = useState("light");

  // Load theme từ localStorage
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "light";
    setTheme(savedTheme);
    document.documentElement.setAttribute("data-theme", savedTheme);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
  };

  return (
    <header className="header">
      <div className="container header-inner">
        <a href="#top" className="logo-page-link">
          <img src="../assets/image/Logo.png" alt="Logo" className="logo-img" /> LEAF
        </a>

        <nav className="navA">
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>

        <button className="theme-toggle" onClick={toggleTheme}>
          {theme === "light" ? "🌙" : "☀️"}
        </button>
      </div>
    </header>
  );
}
