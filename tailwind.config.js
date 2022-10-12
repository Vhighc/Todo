/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ "./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      colors: {
        'regal-green': 'rgb(7, 146, 109)',
        'dark-label': 'rgba(0, 0, 0, 0.6)',
        'bord-blue': '#5d0cff',
      },
    },
  },
  plugins: [],
}
