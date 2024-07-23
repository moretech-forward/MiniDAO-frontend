const options = require("./config"); //options from config.js

/** @type {import('tailwindcss').Config} */
module.exports = {
  important: true,
  content: ["./src/**/*.{html,js,php}"],
  darkMode: "class",
  theme: {
    extend: {},
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/container-queries"),
    require("daisyui"),
  ],
  daisyui: {
    prefix: 'tw-',
    themes: [
      "light",
      "dark",
      "bumblebee",
      "corporate",
      "dim",
      "sunset",
    ],
  },
};
