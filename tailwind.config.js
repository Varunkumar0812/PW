/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}",
    "node_modules/flowbite-react/lib/esm/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        light: "#F5F5F7",
        medium: "#E4E0E1",
        dark: "#272727",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
