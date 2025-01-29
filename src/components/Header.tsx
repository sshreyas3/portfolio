import React from "react";
import Image from "next/image";
import { assets } from "../../public/assets/assets.js";

export function Header() {
  return (
    <header className="flex justify-between fixed items-center p-5 top-0 left-0 w-full z-10 ">
      <a href="#top" className="flex justify-items-center">
        <Image src={assets.logoHeader} alt={"Shreyas"} className="w-80 h-70" />
      </a>
      <nav className="space-x-5 top-0 right-0 p-5 ">
        <a href="#top" className="hover:text-colorBronze">
          Home
        </a>
        <a href="#about" className="hover:text-colorBronze">
          About
        </a>
        <a href="#projects" className="hover:text-colorBronze">
          Projects
        </a>
        <a href="#contact" className="hover:text-colorBronze">
          Contact
        </a>
      </nav>
    </header>
  );
}
