module.exports = {
  mode: 'jit',
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url('./assets/img/table-texture.jpg')",
      },
    },
  },
  plugins: [],
};
