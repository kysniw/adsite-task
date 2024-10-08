const plugin = require("tailwindcss/plugin");

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#0147FF",
        secondary: "#F7F7F7",
        dark: "#282828",
      },
      fontFamily: {
        "roboto-flex": ["Roboto Flex", "sans-serif"],
        "roboto-condensed": ["Roboto Condensed", "sans-serif"],
        bebas: ["Bebas Neue", "sans-serif"],
      },
      screens: {
        xs: "400px",
      },
    },
  },
  plugins: [
    plugin(function ({ addUtilities }) {
      addUtilities({
        ".rotate-y-full": {
          transform: "rotateY(360deg)",
        },
        ".-rotate-y-full": {
          transform: "rotateY(-360deg)",
        },
      });
    }),
  ],
};
