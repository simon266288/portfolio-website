/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        background: '#0a0a0a',
        'background-secondary': '#111111',
        text: '#ffffff',
        'text-secondary': '#a1a1aa',
        'text-tertiary': '#71717a',
        border: '#27272a',
        primary: '#667eea',
        'primary-dark': '#764ba2',
        secondary: '#f5576c',
      },
      spacing: {
        '18': '4.5rem',
        '128': '32rem',
      },
      borderRadius: {
        'card': '16px',
        'card-sm': '12px',
      },
      boxShadow: {
        'card': 'var(--shadow-md)',
        'card-hover': 'var(--shadow-lg)',
        'card-inner': 'inset 0 1px 0 rgba(255, 255, 255, 0.05)',
      },
      fontFamily: {
        sans: ['-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', 'sans-serif'],
      },
      fontSize: {
        'display': 'clamp(2rem, 5vw, 4rem)',
        'heading': 'clamp(1.5rem, 3vw, 2.5rem)',
        'subheading': 'clamp(1.25rem, 2vw, 1.75rem)',
        'body': 'clamp(0.9375rem, 2vw, 1rem)',
        'small': 'clamp(0.8125rem, 1.5vw, 0.875rem)',
      },
      fontWeight: {
        'medium': '500',
        'semibold': '600',
        'bold': '700',
      },
      transitionDuration: {
        'fast': '150ms',
        'normal': '250ms',
        'slow': '350ms',
      },
      transitionTimingFunction: {
        'smooth': 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
    },
  },
  plugins: [],
}
