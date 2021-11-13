module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'dark-background': '#222',
        'light-background': '#424242',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}