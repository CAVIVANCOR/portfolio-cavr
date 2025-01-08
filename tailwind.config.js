/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{html,js,ts,jsx,tsx}"], // Incluye JSX y TSX
  theme: {
    extend: {
      colors: {
        primary: '#ffc107',
        secondary: '#ff18b8'
      },
      animation: {
        'spin-slow': 'spin 5s linear infinite',//Slow spin animation
      },
      keyframes: {
        spin: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
      },
    }
  },
  plugins: [],
};