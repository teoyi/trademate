module.exports = {
  content: ["./src/**/*.{html,js,jsx,tsx}"],
  theme: {
    extend: {
      colors: { 
        'base': '#2B2B2B',
        'secondary-base': '#333333',
        'accent': '#4FAD8F',
        'primary-text': '#FFFFFF',
        'secondary-text': '#BFBFBF',
        'hover': '#4AA285',
      },
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
      },
      fontSize: {
        'regular': '1rem',
      },
      height: {
        'no-scroll-l': 'calc(100vh - 100px)'
      },
      spacing: { 
        '20': '5rem',
      },
      backgroundImage: {
        'login-img' : "url('/src/assets/login.jpg')",
        'register-img' : "url('/src/assets/register.jpg')",
        'hero-img': "url('/src/assets/hero-1.jpg')",
        'hero2-img': "url('/src/assets/hero-2.jpg')",
      }
    },
  },
  plugins: [],
}
