/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Poppins: ["Poppins", "sans-serif"],
        GreatVibes: ["Great Vibes", "cursive"],
      },
      colors: {
        websiteRed: "#F42F2C",
        websiteGray: "#F9F9FF",
      },
      textColor: {
        websiteText: "#F42F2C",
      },
    },
  },
  plugins: [],
};
