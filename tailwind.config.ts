import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        customPurple: "#451952",
        customRose: "#AE445A",
        customPurpleLight: "#662549",
        customYellow: "#F39F5A",
      },
    },
  },
  plugins: [],
} satisfies Config;
