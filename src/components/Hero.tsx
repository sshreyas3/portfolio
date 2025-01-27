import React from "react";
import { Typography } from "@mui/material";

export function Hero() {
  return (
    <section className="flex flex-col items-center justify-center h-screen text-center bg-gradient-to-b from-gray-900 to-gray-800">
      <Typography
        variant="h2"
        component="h2"
        className="text-5xl font-extrabold mb-4"
      >
        Hello, I am Shreyas
      </Typography>
      <Typography variant="body1" className="text-xl mb-8 max-w-xl">
        I am a passionate Frontend Developer building clean and responsive
        websites using ReactJS, TailwindCSS, and modern technologies.
      </Typography>
      <a
        href="#projects"
        className="px-6 py-3 bg-blue-500 rounded-lg text-lg hover:bg-blue-600 transition"
      >
        See My Work
      </a>
    </section>
  );
}
