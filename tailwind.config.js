/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      "white": "#e0e0c0",
      "black": "#000000",
      "green": "#009000",
      "red": "#f01800",
      "yellow": "#f0e800",
      "blue": "#6058a0"
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar'),
    function({ addUtilities }) {
      addUtilities({
        ".scrollbar-hide::-webkit-scrollbar": {
          display: "none",
        },
  
        /* For IE, Edge and Firefox */
        ".scrollbar-hide": {
          "-ms-overflow-style": "none",  /* IE and Edge */
          "scrollbar-width": "none",  /* Firefox */
        }
      })
    }
  ],
};
