import { colors } from './src/styles/colors'
import { fontFamily } from './src/styles/font-family'

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {

    backgroundImage: {
      'img_bg_welcome': "url('../assets/bg.png')",
    },

    extend: {
      colors,
      fontFamily
      
    },
  },
  future: {
    hoverOnlyWhenSupported: true,
  },
  plugins: [],
};
