module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bleu: "#2e86de",
        salsa: "#ee5253",
        jungle: "#10ac84",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
  corePlugins: {
    preflight: false,
  },
};
