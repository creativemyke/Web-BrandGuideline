/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        background: "#012841",
        primary: "#3D77B9", // Add your custom primary color
        secondary: "#FAEE5D", // Add your custom secondary color
        // Add more custom colors as needed
      },

      backgroundImage: {
        logogrid: "url('/images/logo mark grid.svg')",
        logotype: "url('/images/logotypegrid.svg')",
        image1: "url('/images/2.webp)",
        image2: "url('/images/3.webp')",
        image3: "url('/images/4.webp')",
        image4: "url('/images/5.webp')",
        image5: "url('/images/6.webp')",
        image6: "url('/images/7.webp')",
        image7: "url('/images/8.webp')",
        image8: "url('/images/9.webp')",
        image9: "url('/images/10.webp')",
      },
    },
  },
  plugins: [],
};
