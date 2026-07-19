import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        fairway: {
          50: "#f1f8f2",
          100: "#dcecdf",
          200: "#b8d8c0",
          300: "#8cbf99",
          400: "#5fa072",
          500: "#3f8355",
          600: "#2f6a44",
          700: "#275438",
          800: "#22432f",
          900: "#1d3729",
        },
        sand: {
          50: "#faf7f0",
          100: "#f2ead6",
          200: "#e6d5ad",
        },
      },
      fontFamily: {
        sans: ["ui-sans-serif", "system-ui", "-apple-system", "Segoe UI", "Roboto", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
