/** @type {import('tailwindcss').Config} */
const flowbite = require("flowbite-react/tailwind");

export default {
  content: [
    "./index.html", 
    "./src/**/*.{js,ts,jsx,tsx}",
    flowbite.content(),
  ],
  theme: {
    extend: {
      colors: {
        'dark-primary' : '#344765',
        'orange-primary': '#344765',
        'green-primary': '#344765',
        'red-primary': '#f02722',
        'red-secondary': '#c10e65',
        'blue-primary' : '#0571E1',
      },
    },
  },
  plugins: [
    flowbite.plugin(),
  ],
}

