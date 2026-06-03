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
        tertiary: "#4B5563",
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
      fontSize: {
        base: "1rem",
        sm: [
          "1.5rem",
          {
            fontWeight: "500",
          },
        ],
        md: [
          "2.25rem",
          {
            fontWeight: "700",
          },
        ],
        lg: [
          "3rem",
          {
            fontWeight: "700",
          },
        ],
        xl: [
          "3.75rem",
          {
            fontWeight: "700",
          },
        ],
      },
    },
  },
  plugins: [],
};
export default config;

