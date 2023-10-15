/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      width: {
        100: "100px",
      },
      colors: {
        gray: {
          100: "#eeeeee",
          200: "#A6A6A6",
          300: "#6a6a6a",
          400: "#636363",
          500: "#333333",
          600: "#1A1A1A",
          700: "#191919",
        },
        brandGreen: "#1DC29D",
        brandRed: "#BA5858",
        darkenedGreen: "#11765F",
        customPink: "#0500BE",
        customBlue: "#E01DA7",
        errorRed: "#BC2727",
      },
    },
    borderColor: (theme) => ({
      ...theme("colors"),
      DEFAULT: theme("colors.gray.300", "currentColor"),
    }),
  },
  variants: {
    extend: {
      opacity: ["active"],
      margin: ["first", "last"],
      borderWidth: ["first", "last"],
      backgroundColor: ["checked"],
      borderColor: ["checked"],
    },
  },
  plugins: [],
};
