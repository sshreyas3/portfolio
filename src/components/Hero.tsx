import React from "react";
import { motion } from "framer-motion";

export function Hero() {
  return (
    <section className="items-center relative z-10 h-screen bg-customImg bg-cover bg-center">
      {/* Low-opacity overlay */}
      <div className="absolute inset-0 bg-black/10" />

      {/* Centered minimalist text */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative z-20 h-full bottom-8 flex flex-col items-center justify-center text-center"
      >
        <h1 className="text-4xl md:text-5xl font-light text-white mb-2">
          Frontend Developer
        </h1>
        <p className="text-lg md:text-xl text-white/80 font-mono">
          REACT JS | NEXT JS | SASS | TAILWIND
        </p>
      </motion.div>
    </section>
  );
}
