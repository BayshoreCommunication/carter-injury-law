const { nextui } = require("@nextui-org/react");
const withMT = require("@material-tailwind/react/utils/withMT");

/** @type {import('tailwindcss').Config} */
module.exports = withMT({
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#CE2523",
        secondary: "#1E2538",
        black: "#000000",
        white: "#FFFFFF",
      },
      backgroundImage: {
        heroBg: `url('/assets/homepage/header-bg.png')`,
      },
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "4rem",
        xl: "5rem",
        "2xl": "1rem",
      },
    },
    maxWidth: {
      "2xl": "1536px",
    },
  },
  plugins: [nextui()],
});