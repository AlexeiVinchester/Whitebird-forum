/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'basic-color': 'rgb(0, 105, 255)',
        'footer': 'rgb(25, 39, 51)',
        'footer-text': 'rgb(182, 199, 214)',
        'admin-icon': 'rgb(33, 168, 20)'
      }
    },
  },
  plugins: [],
}