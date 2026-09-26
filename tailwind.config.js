/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./*.{html,js}",
    "./src/**/*.{html,js}"
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'sans-serif'],
      },
      colors: {
        brand: {
          50: '#f0fdfa',
          100: '#ccfbf1',
          400: '#2dd4bf',
          500: '#14b8a6',
          600: '#0d9488',
          900: '#134e4a',
        },
        navy: {
          700: '#1e293b', // Borders & Hover in Dark
          800: '#131B2F', // Surface/Cards in Dark
          900: '#0B1120', // Main Background in Dark
        },
        finance: {
          income: '#10b981',
          expense: '#ef4444',
        }
      },
      boxShadow: {
        'soft': '0 4px 20px -2px rgba(0, 0, 0, 0.05)',
        'glow': '0 0 20px rgba(20, 184, 166, 0.3)',
      }
    },
  },
  plugins: [],
}
