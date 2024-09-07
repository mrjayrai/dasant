/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./public/**/*.{html,js}",  // Include other directories like 'public'
    "./components/**/*.{js,ts,jsx,tsx}",  // Include 'components' folder if exists
  ],
  theme: {
    extend: {
      colors:{
        'neutralSilver':'#F5F7FA',
        'neutralDGrey':'#4D4D4D',
        'brandPrimary':'#4CAF4F',
        'neutralGray':'#717171',
        'gray900':'#18191F'
      }
    },
  },
  plugins: [],
}

