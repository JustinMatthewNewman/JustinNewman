module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'source-sans': ['Source Sans Pro', 'sans-serif'],
        'apple-sans': ['Helvetica Neue', 'Arial', 'sans-serif'],
        'apple-serif': ['Times New Roman', 'serif'],
        'montserrat': ['Montserrat', 'sans-serif'], // Added Montserrat here
      },
    },
  },
  plugins: [],
};
