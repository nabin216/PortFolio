/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: "#0f172a",
        secondary: "#1e293b",
        accent: "#3b82f6",
        dark: {
          primary: "#111827",
          secondary: "#1f2937",
          accent: "#60a5fa",
          text: "#f3f4f6",
          background: "#030712"
        },
        light: {
          primary: "#0f172a",
          secondary: "#1e293b",
          accent: "#3b82f6",
          text: "#1e293b",
          background: "#f8fafc"
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
} 