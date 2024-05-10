/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        textBlack: "#333333",
      },
      fontFamily: {
        balsamiqSans: ["Balsamiq Sans", "cursive"],
      }
    },
  },
  plugins: [],
}

