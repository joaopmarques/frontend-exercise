/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      orange: "#FFBB56",
      green: "#45E3BE",
      blue: "#2FBDEA",
      midnight: "#1F2B48",
      purple: "#8D65FF",
      silver: {
        100: "#FFFDF5",
        200: "#C9C5D3",
        300: "#ACAAC0",
      },
    },
    fontFamily: {
      workSans: ['"Work Sans"', "sans-serif"],
      roboto: ["Roboto", "sans-serif"],
    },
    fontSize: {
      xs: ["18px", { lineHeight: "27px" }],
      sm: ["26px", { lineHeight: "39px" }],
      md: ["32px", { lineHeight: "48px" }],
      lg: ["40px", { lineHeight: "52px" }],
      xl: ["72px", { lineHeight: "94px" }],
    },
    extend: {},
  },
  plugins: [],
};
