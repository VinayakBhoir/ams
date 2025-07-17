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
      // 🔸 Custom brand color palette
      colors: {
        primary: '#d6470b',      // Branding orange
        accent: '#f5cdbf',      // Soft pink
        dark: '#1f1f1f',      // Near-black text
        light: '#f7f6f5',      // Light gray
      },

      // 🔸 Custom fonts for headings and body
      fontFamily: {
        sans: ['"Open Sans"', 'sans-serif'],
        heading: ['"Lora"', 'serif'],
      },

      // 🔸 Keyframe animations for slide-in effects
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

      // 🔸 Animation shortcuts using above keyframes
      animation: {
        slideInLeft: 'slideInLeft 0.5s ease-out',
        slideInRight: 'slideInRight 0.5s ease-out',
      },
    },
  },

  // 🔸 Plugins
  plugins: [
    aspectRatio, // Tailwind's aspect ratio plugin
  ],
}
