// tailwind.config.js
import aspectRatio from '@tailwindcss/aspect-ratio'
import typography from '@tailwindcss/typography'

/** @type {import('tailwindcss').Config} */
export default {
  // Enable class‑based dark mode
  darkMode: 'class',

  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],

  theme: {
    extend: {
      // 🌟 Premium, Rich Color Palette
      colors: {
        primary: '#1e3a8a',  // Deep indigo
        secondary: '#0ea5e9',  // Bright cyan
        accent: '#f59e0b',  // Warm gold
        'neutral-dark': '#111827', // Almost-black
        neutral: '#374151',  // Slate gray
        'neutral-light': '#f3f4f6', // Soft off-white
      },

      // 🔹 Custom fonts for headings and body
      fontFamily: {
        sans: ['"Open Sans"', 'sans-serif'],
        heading: ['"Lora"', 'serif'],
      },

      // 🔹 Container for centered layouts
      container: {
        center: true,
        padding: '1.5rem',
      },

      // 🔹 Additional spacing scale
      spacing: {
        '72': '18rem',
        '84': '21rem',
        '96': '24rem',
      },

      // 🔹 Extra border‑radius options
      borderRadius: {
        xl: '1.25rem',
        '2xl': '1.5rem',
      },

      // 🔹 Richer shadows for depth
      boxShadow: {
        '3xl': '0 20px 25px -5px rgba(0,0,0,0.1), 0 10px 10px -5px rgba(0,0,0,0.04)',
      },

      // 🔹 Keyframe animations for slide‑in effects
      keyframes: {
        'fade-in-up': {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideInLeft: {
          '0%': { opacity: 0, transform: 'translateX(-50px)' },
          '100%': { opacity: 1, transform: 'translateX(0)' },
        },
        slideInRight: {
          '0%': { opacity: 0, transform: 'translateX(50px)' },
          '100%': { opacity: 1, transform: 'translateX(0)' },
        },
      },

      // 🔹 Animation shortcuts
      animation: {
        slideInLeft: 'slideInLeft 0.5s ease-out',
        slideInRight: 'slideInRight 0.5s ease-out',
        'fade-in-up': 'fade-in-up 0.8s ease-out both',
        'fade-in-up-delayed': 'fade-in-up 1s ease-out 0.3s both'
      },
    },
  },

  plugins: [
    aspectRatio,
    typography,
  ],
}
