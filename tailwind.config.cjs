module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'bg-900': '#031226',
      },
      keyframes: {
        float: {
          '0%,100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 10px rgba(59,130,246,0.35)' },
          '50%': { boxShadow: '0 0 30px rgba(59,130,246,0.6)' },
          '100%': { boxShadow: '0 0 10px rgba(59,130,246,0.35)' }
        }
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        glow: 'glow 3s ease-in-out infinite',
      }
    },
  },
  plugins: [],
}
