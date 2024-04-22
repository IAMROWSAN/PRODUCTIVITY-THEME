/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Heading: ["Sedan"],
        text: ["Inter"]
      },

      colors:{
        'lightYellow': '#FFFBDA',
        'darkYellow': '#FFEC9E',
        'lightOrange': '#FFBB70',
        'darkOrange': '#ED9455',
      }
    },
  },
  plugins: [require("daisyui")],

  daisyui: {
    themes: ["light"]
  },

}

