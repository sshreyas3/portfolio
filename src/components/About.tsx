import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export function About() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["-30%", "10%"]);

  return (
    <motion.section
      ref={ref}
      style={{ y }}
      id="about"
      className="relative z-30 py-24 bg-gradient-to-b from-colorSomeBlack to-colorSomeBlack backdrop-blur-md"
    >
      <div className="container mx-auto px-5">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-3xl font-bold text-center mb-8 text-customOffWhite"
        >
          About Me
        </motion.h2>

        <p className="text-lg max-w-3xl mx-auto text-justify">
          I'm a Frontend Trainee Engineer (ReactJS) at Hudini, with experience
          in creating scalable and maintainable web applications. My strengths
          lie in designing intuitive interfaces, implementing pixel-perfect
          designs, and ensuring seamless user interactions. I’m always up for
          learning new technologies and improving my craft to deliver
          high-quality web solutions. Skills Include: Languages: JavaScript
          (ES6+), TypeScript, HTML5, CSS3/SCSS Frameworks/Libraries: ReactJS,
          Next.js, Tailwind CSS, Material-UI Tools: Git, Figma, VS Code,
          Postman.
        </p>
      </div>
    </motion.section>
  );
}
