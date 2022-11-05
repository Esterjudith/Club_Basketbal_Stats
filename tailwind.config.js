/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./views/*.ejs', './views/partials/*.ejs'],
    theme: {
        screens: {
            sm: '480px',
            md: '768px',
            lg: '976px',
            xl: '1440px'
        },
        extend: {
            colors: {
                veryLightGray: '#eaebeb',
                ligthGray: '#abadad',
                gray: '#1f2424',
                mdGray: '#1f2424',
                darkGray: '#121414',
                veryDarkGray: '#040505',
            }
        },
    },
    plugins: [require('daisyui')],
}
