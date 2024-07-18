module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#4f46e5',
        secondary: '#64748b',
        background: '#0f172a',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      fontSize: {
        '6xl': '4rem',
      },
    },
  },
  plugins: [],
};
