module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        red: '#d43838',
        gray: '#262626',
        orange: '#faad14',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
