/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        textColor: '#EBEBEA',
        headerColor: "#010814",
        primary: "#021027",
        secondary: "#CC5F00"
      }
    },
  },
  plugins: [],
}

