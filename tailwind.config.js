const { fontFamily } = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        pricedown: ['PRICEDOWN BL', ...fontFamily.sans],
        // Add more custom font families as needed
      },
    },
  },
  plugins: [],
}

