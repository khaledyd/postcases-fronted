const { fontFamily } = require("tailwindcss/defaultTheme");

module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        xs: { min: "0px", max: "640" },
        sm: "640px",
        md: "768px",
        lg: "1024px",
      },
      colors: {
        "brand-primary": "#6C5CE6",
        "brand-secondary": "#fff",
        "brand-base": "#091F3B",
        "brand-via": "#B8DDFF",
        animlot: "#F35588",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      },
      fontFamily: {
        openSans: ["var(--openSans-font)", ...fontFamily.sans],
        roboto: ["var(--roboto-font)", ...fontFamily.sans],
        poppins: ["var(--poppins-font)", ...fontFamily.sans],
      },
    },
  },
  plugins: [],
};
