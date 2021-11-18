module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false,
  theme: {
    screens: {
      xxs: { min: "320px", max: "400px" },
      sm: { min: "640px", max: "767px" },
      md: { min: "768px", max: "1023px" },
      lg: { min: "1024px", max: "1279px" },
      xl: { min: "1280px", max: "1535px" },
    },
    extend: {
      backgroundColor: (theme) => ({
        ...theme("colors"),
        primary: "#CD5D67",
      }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
