/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["**/*.{ejs, js}", "**/**/*.{ejs, js}"],
  theme: {
    fontFamily: {
      'Inter': ['Inter', 'sans-serif'],
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

