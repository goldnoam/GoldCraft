/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./index.tsx",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./App.tsx",
    "./constants.ts",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        minecraftGold: '#FFD700',
      }
    },
  },
  plugins: [],
}