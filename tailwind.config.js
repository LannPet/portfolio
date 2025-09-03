/** @type {import('tailwindcss').Config} */
import fluid, { extract, fontSize } from 'fluid-tailwind'
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
  extend: {
      keyframes: {
        'fade-in': {
          '0%': { opacity: '0', transform: 'translateY(8px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        'fade-in': 'fade-in 400ms ease-out both',
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        jakarta: ['"Plus Jakarta Sans"', 'sans-serif'],
      },
    },
  },
  plugins: [
      require('@tailwindcss/typography'),
  ],
}