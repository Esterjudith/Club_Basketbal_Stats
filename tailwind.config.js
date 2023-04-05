/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["**/*.{ejs, js}", "**/**/*.{ejs, js}"],
  theme: {
    fontFamily: {
      'Roboto': ['Roboto', 'sans-serif'],
    },
    extend: {},
  },
  plugins: [
    {
      tailwindcss: {},
      autoprefixer: {},
      
    },
    require("daisyui")
  ],
}

