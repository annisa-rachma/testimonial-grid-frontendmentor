/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/**/*.{html,js}"],
  theme: {
    screens: {
      mobile : '375px',
      dekstop : '1024px'
    },
    extend: {
      fontFamily : {
        sans : 'Barlow Semi Condensed, sans-serif'
      }
    },
    colors: {
      violet: '#7541c8',
      grayishBlue: '#48556a',
      blackishBlue: '#19212e',
      lightGray: '#cfcfcf',
      lightGrayishBlue: '	#ecf2f8',
      white: '#ffffff'
    }

  },
  plugins: [],
}

