/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'honk': ['Honk', 'sans-serif'],
        'sixtyfour': ['Sixtyfour', 'sans-serif']
      }
    },
  },
  plugins: [],
}

