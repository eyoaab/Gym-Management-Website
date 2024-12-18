/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [ "./src/**/*.{html,js,jsx,ts,tsx}",],
  theme: {
    extend: {
      fontFamily: {
        saira: ['Saira Stencil One', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      },
      fontSize: {
        '50px': '50px',
      },
      colors: {
        darkGray: '#323232',
        darkYellow: '#DDCA24',
        cardColor: '#323232',
        classBg:'#212121',
        footerColor:'#303030',
        blogText:'#E0E0E0'
        
      },
      keyframes: {
        slideInLeft: {
          '0%': {
            transform: 'translateX(-100%)',
          },
          '100%': {
            transform: 'translateX(0)',
          },
        },
      },
      
    },
  },
  plugins: [],
}

