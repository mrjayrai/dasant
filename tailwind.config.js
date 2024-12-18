/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
const flowbite = require("flowbite-react/tailwind");

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./public/**/*.{html,js}", // Include 'public' folder
    "./components/**/*.{js,ts,jsx,tsx}", // Include 'components' folder
    flowbite.content(), // Ensure Flowbite content is included
  ],
  theme: {
    extend: {
      colors: {
        neutralSilver: '#F5F7FA',
        neutralDGrey: '#4D4D4D',
        brandPrimary: '#4CAF4F',
        neutralGray: '#717171',
        gray900: '#DEF2F1',
        PrimaryColor:'#3AAFA9',
        PrimaryBlack:'#17252A',
        SecondaryColor:'#00704A',
        primary: {
          50: '#eff6ff',
          100: '#dbeafe',
          200: '#bfdbfe',
          300: '#93c5fd',
          400: '#60a5fa',
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8',
          800: '#1e40af',
          900: '#1e3a8a',
          950: '#172554',
        },
      },
      fontFamily: {
        caveat: ['Caveat', 'cursive'],
        lora: ['Lora', 'serif'],
        montserrat: ['Montserrat', 'sans-serif'],
        quicksand: ['Quicksand', 'sans-serif'],
      },
      animation: {
        'scroll': 'scroll 18s linear infinite',
      },
      keyframes: {
        scroll: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-100%)' },
        },
      },
    },
  },
  plugins: [
    flowbite.plugin(),
  ],
};
