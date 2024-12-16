/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ "./src/**/*.{html,js,jsx,ts,tsx}",],
  theme: {
    extend: {
      fontFamily: {
        'saira': ['Saira Stencil One', 'sans-serif'],
      },
      fontSize: {
        '50px': '50px',
      },
    },
  },
  plugins: [],
}

