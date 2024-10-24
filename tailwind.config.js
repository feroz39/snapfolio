/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "./safelist.txt"],
  darkMode: "class",
  theme: {
    fontFamily: {
      sans: ["Work Sans", "sans-serif"],
      serif: ["Newsreader", "serif"],
    },
    extend: {
      screens: {
        xs: "480px",
        // => @media (min-width: 992px) { ... }
      },
      gridTemplateColumns: {
        // 'main': '400px repeat(16, minmax(0, 1fr))',
      },
    },
  },
  plugins: [],
}
