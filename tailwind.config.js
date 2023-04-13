/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["**/*.{ejs, js}", "**/**/*.{ejs, js}"],
  theme: {
    fontFamily: {
      'Inter': ['Inter', 'sans-serif'],
    },
    extend: {
      backgroundImage: {
        'bg-main':"url('/imgs/basketball-4559470_640.jpg')",
      },
      padding: {
        'th': '1rem 0 0 0'
      }
    },
  },
  plugins: [
    {
      tailwindcss: {},
      autoprefixer: {},
      
    },
    require("daisyui")
  ],
}

