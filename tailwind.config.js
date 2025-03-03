/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: "#1e40af", // Deep blue
        secondary: "#334155", // Slate
        accent: "#0369a1", // Sky blue
        dark: {
          primary: "#1e3a8a", // Darker blue
          secondary: "#1f2937", // Dark gray
          accent: "#0c4a6e", // Darker sky blue
          text: "#f3f4f6",
          background: "#0f172a"
        },
        light: {
          primary: "#1e40af", // Deep blue
          secondary: "#334155", // Slate
          accent: "#0369a1", // Sky blue
          text: "#1e293b",
          background: "#f8fafc"
        },
        // Removing gradient colors in favor of solid colors
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