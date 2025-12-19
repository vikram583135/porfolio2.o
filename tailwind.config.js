/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Microsoft Core Colors
        'ms-blue': '#0078D4',
        'ms-blue-dark': '#005A9E',
        'ms-blue-light': '#1A9DFF',
        'ms-green': '#7FBA00',
        'ms-green-dark': '#5E8B00',
        'ms-green-light': '#9AD500',
        'ms-red': '#F25022',
        'ms-red-dark': '#D13411',
        'ms-yellow': '#FFB900',
        'ms-yellow-dark': '#E6A600',
        // Surface Colors (Light Theme)
        'surface': '#FFFFFF',
        'surface-alt': '#F5F5F5',
        'surface-hover': '#EBEBEB',
        'surface-dark': '#1B1B1B',
        // Text Colors
        'text-primary': '#1B1B1B',
        'text-secondary': '#6B6B6B',
        'text-muted': '#9CA3AF',
        // Legacy support (for gradual migration)
        'muted-grey': '#6B6B6B',
        'navy-dark': '#1B1B1B',
        'navy': '#2D2D2D',
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
        roboto: ['Roboto', 'sans-serif'],
        segoe: ['Segoe UI', 'sans-serif'],
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'spin-slow': 'spin 20s linear infinite',
        'bounce-slow': 'bounce 3s infinite',
        'gradient-x': 'gradient-x 3s ease infinite',
      },
      backdropBlur: {
        xs: '2px',
      },
      boxShadow: {
        'glow-blue': '0 0 20px rgba(0, 120, 212, 0.3)',
        'glow-green': '0 0 20px rgba(127, 186, 0, 0.3)',
        'glow-red': '0 0 20px rgba(242, 80, 34, 0.3)',
        'glow-yellow': '0 0 20px rgba(255, 185, 0, 0.3)',
        'card': '0 2px 8px rgba(0, 0, 0, 0.08)',
        'card-hover': '0 8px 24px rgba(0, 120, 212, 0.15)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}