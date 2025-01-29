import React from "react";
import Image from "next/image";
import { assets } from "../../public/assets/assets.js";

export function Header() {
  return (
    <header className="flex justify-between items-center p-5 bg-gray-800 shadow-md fixed top-0 left-0 w-full z-10 bg-opacity-50">
      <a href="#top" className="flex justify-items-center">
        <Image
          src={assets.logoHeader}
          alt={"Shreyas"}
          className="w-10 h-10 mr-2"
        />
        {/* <h1 className="text-2xl font-bold">Shreyas S | Portfolio</h1> */}
      </a>
      <nav className="space-x-5 ">
        <a href="#top" className="hover:text-orange-400">
          Home
        </a>
        <a href="#about" className="hover:text-orange-400">
          About
        </a>
        <a href="#projects" className="hover:text-orange-400">
          Projects
        </a>
        <a href="#contact" className="hover:text-orange-400">
          Contact
        </a>
      </nav>
    </header>
  );
}
