import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#FEB914",
        grey: "#606060",
        secondary: "#004208",
        tertiary: "#FFF9EB",
      },
      screens: {
        xx: "400px",
        xs: "480px",
        ss: "596px",
        sm: "768px",
        md: "1060px",
        lg: "1240px",
        xl: "1440px",
        "2xl": "1512px",
      },
      fontFamily: {
        inter: ["'Inter'", "sans-serif"],
        sans: ["'DM Sans'", "sans-serif"],
        wrksans: ["'Work Sans'", "sans-serif"],
        poppins: ["'Poppins'", "sans-serif"],
      },
      fontSize: {
        base: "1rem",
        sm: "1.5rem",
        md: "2.25rem",
        lg: "3rem",
        xl: "3.75rem",
      },
    },
  },
  plugins: [],
};
export default config;
