const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        text: "#040316",
        background: "#fbfbfe",
        primary: "#6A1B9A",
        secondary: "#9b27b0",
        accent: "#0d48a0",
      },
      fontSize: {
        sm: "0.750rem",
        base: "1rem",
        xl: "1.333rem",
        "2xl": "1.777rem",
        "3xl": "2.369rem",
        "4xl": "3.158rem",
        "5xl": "4.210rem",
      },
      fontFamily: {
        heading: "EB Garamond",
        body: "Inter",
      },
    },
  },
  plugins: [],
});
