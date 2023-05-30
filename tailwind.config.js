module.exports = {
  purge: ['./components/**/*.{js,ts,jsx,tsx}', './pages/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'primary-color': '#7427aa',
        'primary-color2': '#111117',
        'secondary-300': '#e8f5fc',
      },
      spacing: {
        '2': '1.25rem',
        '3': '2rem',
        '4': '3.25rem',
        'xs': '0.75rem', // added for --spacing-xs
        '7': '1.75rem', // added for width: 7rem
      },
      fontSize: {
        'small': '0.8rem',
        'label': '0.875rem',
        'body': '1rem',
        'big-body': '1.2rem',
        'h5': '1.4rem',
        '1.3': '1.3rem', // added for font-size: 1.3rem
        '3xl': '1.875rem', // added for font-size: 3rem
      },
      fontFamily: {
        'main': ['Inter'],
        'secondary': ['Josefin Sans'],
        'mono': ['Major Mono Display'],
      },
      zIndex: {
        '10': '998',
      },
    },
  },
  variants: {},
  plugins: [],
}
