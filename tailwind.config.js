/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      'title': ['"Young Serif"', 'serif'],
      'body': ['Onest', 'san-serif'],
    },
  },
  plugins: [],
}