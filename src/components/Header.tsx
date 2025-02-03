import React, { useState, useEffect } from "react";
import Image from "next/image";
import { assets } from "../../public/assets/assets.js";

export function Header() {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY) {
        // Scrolling down
        setIsVisible(false);
      } else {
        // Scrolling up
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  return (
    <header
      className={`flex justify-between items-center p-4 fixed top-0 left-0 w-full z-50 transition-transform duration-300 ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <a href="#top" className="flex items-center">
        <Image
          src={assets.logoHeader}
          alt="Shreyas"
          className="w-48 h-auto md:w-64 lg:w-80"
          priority
        />
      </a>
      <nav className="hidden md:flex space-x-6 lg:space-x-8">
        <a
          href="#top"
          className="text-gray-200 hover:text-colorBronze transition-colors duration-300"
        >
          Home
        </a>
        <a
          href="#about"
          className="text-gray-200 hover:text-colorBronze transition-colors duration-300"
        >
          About
        </a>
        <a
          href="#projects"
          className="text-gray-200 hover:text-colorBronze transition-colors duration-300"
        >
          Projects
        </a>
        <a
          href="#contact"
          className="text-gray-200 hover:text-colorBronze transition-colors duration-300"
        >
          Contact
        </a>
      </nav>
      <button className="md:hidden p-2 text-gray-700 hover:text-colorBronze">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16m-7 6h7"
          />
        </svg>
      </button>
    </header>
  );
}
