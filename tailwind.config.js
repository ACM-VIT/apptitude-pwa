module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false,
  theme: {
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
