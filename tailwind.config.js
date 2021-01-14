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
      maxWidth: {
        'card-w-l': '6.75rem',
      },
      minHeight: {
        'card-h-l': '10.125rem',
      },
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
