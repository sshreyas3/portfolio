import React from "react";
import { Typography } from "@mui/material";

export function Hero() {
  return (
    <section className="flex flex-col items-center bg-customImg bg-cover justify-center h-screen text-center">
      {/* <div className="absolute top-0 left-0 w-full h-full">
        <Typography
          variant="h2"
          component="h2"
          className=" relative top-80 right-8 text-5xl font-semibold text-customOffWhite mb-4"
        >
          Hello.
        </Typography>
      </div> */}

      {/* <Typography
        variant="body1"
        className="text-xl mb-8 max-w-xl text-customOffWhite text-left"
      >
        A Frontend Developer with a passion for turning complex ideas into
        functional, responsive, and visually stunning web applications. With
        expertise in ReactJS, Material-UI, and Tailwind CSS, I build experiences
        that users love to interact with.
      </Typography> */}
      {/* <a
        href="#projects"
        className="relative top-80 px-4 py-3 bg-customOffWhite rounded-xl text-gray-900 hover:bg-colorBronze hover:text-colorSomeBlack transition"
      >
        See My Work
      </a> */}
    </section>
  );
}
