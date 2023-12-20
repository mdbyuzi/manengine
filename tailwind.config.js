/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
    colors:{
      "green":"#7bbb2a",
      "red":"#E3142B",
      "white":"#FFFFFF",
      "gray":"#424F56",
      "orange":"orange",
      "lightgray":"#AFB7C1",
      "blue":"blue",
      "lightblue":"lightblue",
      "btnblue":"#256AB4",
      "black":"#000000",
      "bluewindows":"#407ee3",
      "lightorange":"	#FFD580",
      "darkgreen":'#14452f',
      "cyberyard":"#76b4c9",
      "darkred":"#A52A2A"

    },
    fontFamily:{
      vazir:["vazir","sans-serif"],
      vazir2:["vazir","bold"]
    }
  },
  plugins: [],
}
