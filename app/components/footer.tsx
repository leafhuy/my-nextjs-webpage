
"use client";
import React from "react";

export default function Footer() {
  return (
    <footer className="footer">
      <p>2025 © Gip Sinh Huy</p>
      <button
        className="back-to-top"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        ⬆ Back to Top
      </button>
    </footer>
  );
}
