module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        primary: ["Roboto Condensed", "Sans-Serif"],
        secundary: ["Cabin", "Sans-Serif"],
      },
      backgroundColor: {
        primary: "var(--primary-1)",
      },
      container: {
        padding: {
          lg: "20px",
          xl: "40px",
          "2xl": "40px",
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    "gatsby-plugin-postcss",
    function ({ addComponents }) {
      addComponents({
        ".container": {
          width: "100%",
          marginLeft: "auto",
          marginRight: "auto",
          paddingLeft: "2rem",
          paddingRight: "2rem",
          maxWidth: "100%",
          "@screen lg": {
            maxWidth: "1024px",
          },
          "@screen xl": {
            maxWidth: "1280px",
          },
        },
      })
    },
  ],
}
