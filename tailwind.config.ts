import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
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
  plugins: [],
} satisfies Config;
