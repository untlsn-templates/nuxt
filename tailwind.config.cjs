module.exports = {
  purge: false,
  extract: {
    include: ['**/*.{jsx,tsx,css}'],
    exclude: ['node_modules', '.git', '.next'],
  },
  theme: {
    extend: {
      colors: {
        primary: {
          main: '#E22D40',
          dark: '#9E0E1D',
          darkmode: 'rgb(39,39,42)'
        },
        secondary: {
          main: '#2EB2EC',
          dark: '#0E79A8',
          darkmode: 'rgb(63,63,70)'
        },
        tertiary:{
          main: '#2EB2EC',
          dark: '#0E79A8',
          darkmode: "rgb(82,82,91)"
        },
        quaternary:{
          main: '#2EB2EC',
          dark: '#0E79A8',
          darkmode:"rgb(106,106,108)"
        },
        warn: '#e7b510',
        dark: {
          text: '#231F20',
        },
        divider: {
          shadow: {
            2: '#231F2014',
          },
          2: '#231F20',
        },
        background: '#F1F1F1',
        gray: {
          400: '#dadada',
        },
        success: {
          main: '#4CAF50',
          dark: '#388E3C',
        },
      }
    },
  },
  plugins: [],
};
