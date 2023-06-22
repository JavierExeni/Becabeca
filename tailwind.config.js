/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        green: "#21a7a7",
        "ligth-green": "#7acaca",
        "dark-purple": "#4e2b86",
        "normal-purple": "#724c99",
      },
      backgroundImage: {
        login: "url('assets/images/login.jpg')",
      },
    },
  },
  plugins: [],
};
