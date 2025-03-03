/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: "#4f46e5", // Indigo
        secondary: "#7c3aed", // Violet
        accent: "#ec4899", // Pink
        dark: {
          primary: "#3730a3", // Darker Indigo
          secondary: "#6d28d9", // Darker Violet
          accent: "#db2777", // Darker Pink
          text: "#f3f4f6",
          background: "#030712"
        },
        light: {
          primary: "#4f46e5", // Indigo
          secondary: "#7c3aed", // Violet
          accent: "#ec4899", // Pink
          text: "#1e293b",
          background: "#f8fafc"
        },
        gradient: {
          start: "#4f46e5", // Indigo
          mid: "#7c3aed", // Violet
          end: "#ec4899", // Pink
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      animation: {
        'float': 'float 3s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'shimmer': 'shimmer 2s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        }
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'hero-pattern': "url('/public/images/hero-pattern.svg')",
      },
    },
  },
  plugins: [],
} 