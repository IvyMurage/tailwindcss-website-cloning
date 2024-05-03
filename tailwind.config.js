/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
      },
      colors: {
        yellow: "#FED100",
        orange: "#FF5800",
        white: "#FFFFFF",
        "light-gray": "#AFAFAF",
        "light-blue": "#71C6F9",
        "dark-gray": "#333333",
      },
      inset: {
        neg: -2,
      },
    },
  },
  plugins: [],
};
