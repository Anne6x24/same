module.exports = {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    colors: {
      /*baggrund*/
      primary: "#F4F5EB",
      /*rød*/
      secondary: "#B64421",
      /*sort*/
      third: "#00000",
      /*prik lys*/
      fourth: "#CBB17F",
      /*prik mørk*/
      fifth: "#CA8E35",
      /*brun*/
      sixth: "#4B352A",
      /*grøn*/
      seventh: "#72A287",
    },
    extend: {},
  },
  plugins: [require("@tailwindcss/typography"), require("@tailwindcss/forms")],
};
