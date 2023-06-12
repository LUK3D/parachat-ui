/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./src/components/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        black:{
          100: '#0E0E10',
          200: '#1B1A1D',
          300: '#1D1C21',
          400: '#1E1F28',
        },
        primary:'#5765F2',
      },
      height:{
        header:'70px'
      }
    },
  },
  plugins: [],
}

