/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Google Core Colors
        'g-blue': '#4285F4',
        'g-blue-dark': '#1A73E8',
        'g-blue-light': '#669DF6',
        'g-red': '#EA4335',
        'g-red-dark': '#C5221F',
        'g-yellow': '#FBBC04',
        'g-yellow-dark': '#F29900',
        'g-green': '#34A853',
        'g-green-dark': '#188038',
        // Google Surface Colors
        'surface': '#FFFFFF',
        'surface-alt': '#F8F9FA',
        'surface-hover': '#F1F3F4',
        'surface-container': '#E8EAED',
        // Google Text Colors
        'text-primary': '#202124',
        'text-secondary': '#5F6368',
        'text-muted': '#80868B',
        'text-disabled': '#9AA0A6',
        // Google Additional Colors
        'outline': '#DADCE0',
        'divider': '#E8EAED',
      },
      fontFamily: {
        'google': ['"Google Sans"', 'Roboto', 'Arial', 'sans-serif'],
        'roboto': ['Roboto', 'Arial', 'sans-serif'],
        'product': ['"Product Sans"', 'Roboto', 'Arial', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out forwards',
        'fade-in-up': 'fadeInUp 0.6s ease-out forwards',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      backdropBlur: {
        xs: '2px',
      },
      boxShadow: {
        // Google Material Design Elevation
        'goog-1': '0 1px 2px 0 rgba(60,64,67,0.3), 0 1px 3px 1px rgba(60,64,67,0.15)',
        'goog-2': '0 1px 2px 0 rgba(60,64,67,0.3), 0 2px 6px 2px rgba(60,64,67,0.15)',
        'goog-3': '0 1px 3px 0 rgba(60,64,67,0.3), 0 4px 8px 3px rgba(60,64,67,0.15)',
        'goog-4': '0 2px 3px 0 rgba(60,64,67,0.3), 0 6px 10px 4px rgba(60,64,67,0.15)',
        'goog-5': '0 4px 4px 0 rgba(60,64,67,0.3), 0 8px 12px 6px rgba(60,64,67,0.15)',
        // Colored Glows
        'glow-blue': '0 0 20px rgba(66, 133, 244, 0.25)',
        'glow-green': '0 0 20px rgba(52, 168, 83, 0.25)',
        'glow-red': '0 0 20px rgba(234, 67, 53, 0.25)',
        'glow-yellow': '0 0 20px rgba(251, 188, 4, 0.25)',
      },
      borderRadius: {
        'goog': '8px',
        'goog-lg': '12px',
        'goog-xl': '16px',
        'goog-full': '9999px',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'google-gradient': 'linear-gradient(135deg, #4285F4 0%, #34A853 25%, #FBBC04 50%, #EA4335 75%, #4285F4 100%)',
      },
    },
  },
  plugins: [],
}