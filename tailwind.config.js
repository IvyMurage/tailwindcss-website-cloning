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
                "light-bluee": "#71C6F9",
                "dark-gray": "#333333",
                "secondary-gray": "#f1f2f2",
            },
            inset: {
                neg: -2,
                neg10px: "-10px",
            },
            borderWidth: {
                1: "1px",
                3: "3px",
            },
        },
    },
    plugins: [],
};
