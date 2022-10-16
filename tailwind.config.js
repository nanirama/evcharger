module.exports = {
  content: [
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: ['even'],
      colors: {
        orange: {
          600: '#FA6847',
        },
        violet : {
          800 :'#5032a8',
        },
        indigo : {
          900 :'#222e57',
        },
        lime : {
          500 :'#B1C681',
        },
        blue : {
          500 :'#667eea',
        }
      }
    },
  },
  plugins: [],
}
