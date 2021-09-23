module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: (theme)=>({
        "main": "url('/images/main-bg.jpg')"
      }),
    },
    fontFamily: {
      rubik: ["Rubik", "sans-serif"],
      title: ["Inter", "sans-serif"],

    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require("tailwind-scrollbar-hide")
  ],
};
