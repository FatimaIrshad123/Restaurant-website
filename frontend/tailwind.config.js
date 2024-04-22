/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}","./node_modules/flowbite/**/*.js"],
  theme: {
    extend: {
      colors: {
        brightColor: "#F4511F",
        backgroundColor: "#b7bca9",
        lightText: "#959595",
      },
    },
  },
  plugins: [
    require('flowbite/plugin')
]
};
