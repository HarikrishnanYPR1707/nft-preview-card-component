/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        fmDarkBlue: "#0d1a2d",
        fmLigntBlue: "#15273f",
        fmCyan: "#00fff7",
      },
      fontFamily: {
        specimen: ["Outfit", "sans-serif"],
      },
    },
  },
  plugins: [],
};
