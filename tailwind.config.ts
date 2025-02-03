import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        "fade-in-up": {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "slide-up": {
          "0%": { transform: "translateY(100%)" },
          "100%": { transform: "translateY(0)" },
        },
      },
      animation: {
        "fade-in": "fade-in 1s ease-out",
        "fade-in-up": "fade-in-up 1s ease-out",
        "slide-up": "slide-up 1s ease-out",
      },
      backgroundImage: {
        customImg: "url('/assets/bg-img.jpg')",
      },

      colors: {
        customPurple: "#451952",
        customRose: "#AE445A",
        customPurpleLight: "#662549",
        customYellow: "#F39F5A",
        customDarkGreen: "#141E27",
        customGreen: "#203239",
        customBeige: "#E0DDAA",
        customOffWhite: "#EEEDDE",
        colorSomeGrey: "#383836",
        colorSomeGrey2: "#2E2C28",
        colorSomeBlack: "#1D1D1D",
        colorBronze: "#C68A41",
      },
    },
  },
  variants: {},
  plugins: [],
} satisfies Config;
