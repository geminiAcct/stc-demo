const flowbite = require("flowbite-react/tailwind");

/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}", flowbite.content()],
  theme: {
    extend: {
      colors: {
        primary: "#285fa5",
        secondary: "#2081c9",
        green: "#2edc8a",
        white: "#f5f5f5",
        dark_white: "#ebebeb",
        black: "#292929",
      },
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
        roboto: ["Roboto", "sans-serif"],
      },
      backgroundImage: {
        "bg-stc": "url('/src/assets/images/bg-stc.png')",
        "bg-lines": "url('/src/assets/images/Colored Shapes.svg')",
        "bg-shapes": "url('/src/assets/images/White Shapes.svg')",
        "stc-hero": "url('/src/assets/images/stc-hero.png')",
        "bg-test": "url('/src/assets/images/test.png')",
        "bg-test2": "url('/src/assets/images/test2.png')",
        "bg-test3": "url('/src/assets/images/test3.png')",
      },
    },
  },
  plugins: [flowbite.plugin()],
};
