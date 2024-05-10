const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        'text': '#040316',
        'background': '#fbfbfe',
        'primary': '#6A1B9A',
        'secondary': '#9b27b0',
        'accent': '#0d48a0',
       },
    },
  },
  plugins: [],
});
