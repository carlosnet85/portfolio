/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  safelist: [
    {
      pattern: /bg-(zinc)-(100)/, 
    },
  ],
  
  theme: {
   
    extend: {
      fontFamily: {
        moderustic: ['"Moderustic"', 'sans-serif'],
      },
    },
  },
  
  plugins: [
    require("@xpd/tailwind-3dtransforms")
  ],
};
