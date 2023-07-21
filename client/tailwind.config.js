/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      gridTemplateColumns: {
        custom: "repeat(auto-fit, minmax(20rem, 1fr))",
      },
      colors: {
        textBg: "rgba(81, 81, 81, 0.41)",
      },
    },
  },
  plugins: [],
};
