// tailwind.config.js
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#4CAF50', // Eco-friendly green
        'primary-dark': '#388E3C',
        secondary: '#81C784',
        background: '#F1F8E9', // Light eco-friendly background
        accent: '#8BC34A',
      },
      fontFamily: {
        sans: ['Nunito', 'sans-serif'],
        display: ['Playfair Display', 'serif'],
      },
    },
  },
  plugins: [],
};
