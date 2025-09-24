module.exports = {
  content: [
    "./layouts/**/*.{html,js}",
    "./content/**/*.{md,html}",
    "./assets/**/*.{js,css}",
    "./data/**/*.{yml,yaml,toml,json}",
    // Include module layouts too:
    "./**/hugo_cache/modules/filecache/**/*.{html,js}",
  ],
  theme: { extend: {} },
  plugins: [],
};
