// const flowbite = require("flowbite-react/tailwind");
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // flowbite.content(),
    "./node_modules/flowbite-react/lib/**/*.js",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        degular: "var(--font-degular)",
      },

      colors: {
        "pry-color": "#131316",
        "sec-color": "#56616B",
      },

      screens: {
        0: "0px",
        400: "400px",
        630: "630px",
        685: "685px",
        1025: "1025px",
       
        // 1025: "1025px",
      },

      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [
    require("tailwind-scrollbar-hide"),
    require("tailwind-scrollbar")({ nocompatible: true }),
    require("flowbite/plugin"),
    // flowbite.plugin(),
  ],
};
