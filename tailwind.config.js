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

