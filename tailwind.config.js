/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        "Gottham-book": ["GothamSSm-Book_Web"],
        "Gottham-medium": ["GothamSSm-Medium_Web"],
      },
    },
  },
  plugins: [],
};
