module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'xs': '480px',
        'custom': '700px',
      },
      fontFamily: {
        'DM Sans': ['DM Sans', 'sans-serif'],
        'Inter': ['Inter', 'sans-serif'],
        'Inter Tight': ['Inter Tight', 'sans-serif'],
        'Montserrat': ['Montserrat', 'sans-serif'],
        'Open Sans': ['Open Sans', 'sans-serif'],
        'Poppins': ['Poppins', 'sans-serif'],
        'Roboto': ['Roboto', 'sans-serif'],
        'Bebas' : ['Bebas Neue', 'sans-serif'],
        'Oswald': ['Oswald', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
