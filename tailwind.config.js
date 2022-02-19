module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      animation: {
        'spin-slow': 'spin 100s linear infinite',
      },
      boxShadow: {
        neon: '0 0 0.4rem 0 #8a51f8',
      },
    },
  },
  plugins: [require('daisyui')],
};
