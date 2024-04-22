/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'Neutrals-blue-700': "#00369B",
        'Neutrals-button': "#253556",
      }
    },
  },
  plugins: [],
}