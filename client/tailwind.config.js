module.exports = {
  content: ["./src/**/*.{html,js,jsx,tsx}"],
  theme: {
    extend: {
      colors: { 
        'base': '#2B2B2B',
        'secondary-base': '#333333',
        'accent': '#4FAD8F',
        'primary-text': '#FFFFFF',
        'secondary-text': '#BFBFBF'
      },
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
      },
      height: {
        'no-scroll-l': 'calc(100vh - 100px)'
      },
      spacing: { 
        '20': '5rem',
      }
    },
  },
  plugins: [],
}
