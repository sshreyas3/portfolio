import React from "react";

export function Header() {
  return (
    <header className="flex justify-between items-center p-5 bg-gray-800 shadow-md">
      <h1 className="text-2xl font-bold">My Portfolio</h1>
      <nav className="space-x-5">
        <a href="#about" className="hover:text-blue-400">
          About
        </a>
        <a href="#projects" className="hover:text-blue-400">
          Projects
        </a>
        <a href="#contact" className="hover:text-blue-400">
          Contact
        </a>
      </nav>
    </header>
  );
}
