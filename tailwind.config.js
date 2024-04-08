import { colors } from './src/styles/colors'
import { fontFamily } from './src/styles/font-family'

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/components/*.{js,jsx,ts,tsx}","./src/app/**/*{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {

    backgroundImage: {
      'img_bg_welcome': "url('./src/assets/bg.png')",
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
