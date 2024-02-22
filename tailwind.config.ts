/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        mainColor: '#224C17',
        secoColor: '#E68C3A',
        grayColor: '#D9D9D9',
        blackColor: '#000000',
        altColor: '#2b5f1b73',
      },
      boxShadow: {
        menu: '0px 159px 95px rgba(13,12,34,0.01), 0px 71px 71px rgba(13,12,34,0.02), 0px 18px 39px rgba(13,12,34,0.02), 0px 0px 0px rgba(13,12,34,0.02)',
      },
      backgroundColor: {
        customColor: '#3c66ab', // Add your custom color
      },
      maxWidth: {
        '10xl': '1680px'
      },
      keyframes : {
        moveTop: {
          '0%' : {transform: 'translateY(0)'},
          '50%' : {transform: 'translateY(15px)'},
          '100%' : {transform: 'translateY(0)'},
        },
        moveRight: {
          '0%' : {transform: 'translateX(0)'},
          '50%' : {transform: 'translateX(10px)'},
          '100%' : {transform: 'translateX(0)'},
        }
      },
      animation : {
        moveTop : 'moveTop 5s ease-in-out infinite', 
        moveRight : 'moveRight 2s ease-in-out infinite', 
      },
      screens: {
        sm: '576px',
        md: '768px',
        lg: '992px',
        xl: '1200px',
        '2xl': '1400px'
      },
    },
  },
  plugins: [],
};