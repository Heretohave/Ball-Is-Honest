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
        sans: ["var(--font-sans)", "ui-sans-serif", "system-ui", "-apple-system", "Segoe UI", "Roboto", "sans-serif"],
        display: ["var(--font-display)", "ui-serif", "Georgia", "serif"],
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(14px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.7s cubic-bezier(0.16, 1, 0.3, 1) both",
      },
      boxShadow: {
        soft: "0 1px 2px rgba(29, 55, 41, 0.06), 0 8px 24px -8px rgba(29, 55, 41, 0.12)",
        lift: "0 12px 32px -12px rgba(29, 55, 41, 0.35)",
      },
    },
  },
  plugins: [],
};

export default config;
