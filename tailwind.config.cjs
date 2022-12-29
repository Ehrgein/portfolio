/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        mobilexs: "320px",
        mobileM: "375px",
        mobileL: "425px",
        tablet: "650px",
        laptop: "1024px",
        laptopL: "1440px",
        desktop: "1920px",
        "4k": "2500px",
      },
    },
  },
  plugins: [],
};
