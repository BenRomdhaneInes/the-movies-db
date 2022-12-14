module.exports = {
  content: ['./src/**/*.{js,jsx}', './public/index.html'],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    fontFamily: {
      sans: ['Open Sans', 'sans-serif'],
    },
    extend: {
        colors: {
          primary: '#1B73E8',
          accent: '#f2c335',
          dark1: '#191641',
          dark2:'#171d22',
          light1: '#727677',
          light2: '#f6f8fa',
          light3: '#f0f2f5',
          white: '#fff',
        },
        spacing: {
          '1': '8px',
          '2': '12px',
          '3': '16px',
          '4': '24px',
          '5': '32px',
          '6': '48px',
        }
    },
  },
  plugins: [],
};