/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "var(--color-primary)",
        "primary-dark": "var(--color-primary-dark)",
        secondary: "var(--color-secondary)",
        accent: "var(--color-accent)",
        background: "var(--color-bg)",
        "text-main": "var(--color-text-primary)",
        "text-sub": "var(--color-text-secondary)",
        white: "var(--color-white)",
      },
    },
  },
  plugins: [],
};
