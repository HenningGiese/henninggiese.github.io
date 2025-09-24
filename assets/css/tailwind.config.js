/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./layouts/**/*.{html,js}",
    "./content/**/*.{md,html}",
    "./assets/**/*.{js,css}",
    "./data/**/*.{yml,yaml,toml,json}",
    "./themes/**/layouts/**/*.{html,js}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
