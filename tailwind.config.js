
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {

    fontFamily:{
      "thanuja":['Figtree', 'sans-serif']
    },

    colors:{
      "yellow":"hsl(47, 88%, 63%)",
      "white":"hsl(0, 0%, 100%)",
      "grey":"hsl(0, 0%, 50%)",
      "black":"hsl(0, 0%, 7%)"
    },
    extend: {
      boxShadow:{
        'box-2x':['rgba(0, 0, 0, 0.16) 0px 1px 4px', 'rgb(51, 51, 51) 10px 10px 0px 3px']
      }
    },
  },
  plugins: [],
}

