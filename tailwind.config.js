// tailwind.config.js 
import aspectRatio from '@tailwindcss/aspect-ratio'

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      // 🌟 Premium, Rich Color Palette
      colors: {
        primary: '#1e3a8a',         // Deep indigo
        secondary: '#0ea5e9',       // Bright cyan
        accent: '#f59e0b',          // Warm gold
        'neutral-dark': '#111827',  // Almost-black
        neutral: '#374151',         // Slate gray
        'neutral-light': '#f3f4f6', // Soft off-white
      },

      // 🔹 Custom fonts for headings and body
      fontFamily: {
        sans: ['"Open Sans"', 'sans-serif'],
        heading: ['"Lora"', 'serif'],
      },

      // 🔹 Keyframe animations for slide-in effects
      keyframes: {
        slideInLeft: {
          '0%': { opacity: 0, transform: 'translateX(-50px)' },
          '100%': { opacity: 1, transform: 'translateX(0)' },
        },
        slideInRight: {
          '0%': { opacity: 0, transform: 'translateX(50px)' },
          '100%': { opacity: 1, transform: 'translateX(0)' },
        },
      },

      // 🔹 Animation shortcuts using above keyframes
      animation: {
        slideInLeft: 'slideInLeft 0.5s ease-out',
        slideInRight: 'slideInRight 0.5s ease-out',
      },
    },
  },

  // 🔹 Plugins
  plugins: [
    aspectRatio,
  ],
}
