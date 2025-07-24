/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#fef3c7',
          100: '#fde68a',
          200: '#fcd34d',
          300: '#fbbf24',
          400: '#f59e0b',
          500: '#d97706',
          600: '#b45309',
          700: '#92400e',
          800: '#78350f',
          900: '#451a03',
        },
        secondary: {
          50: '#fdf4ff',
          100: '#fae8ff',
          200: '#f5d0fe',
          300: '#f0abfc',
          400: '#e879f9',
          500: '#d946ef',
          600: '#c026d3',
          700: '#a21caf',
          800: '#86198f',
          900: '#701a75',
        },
        accent: {
          50: '#ecfdf5',
          100: '#d1fae5',
          200: '#a7f3d0',
          300: '#6ee7b7',
          400: '#34d399',
          500: '#10b981',
          600: '#059669',
          700: '#047857',
          800: '#065f46',
          900: '#064e3b',
        },
        dark: {
          50: '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#64748b',
          600: '#475569',
          700: '#334155',
          800: '#1e293b',
          900: '#0f172a',
        },
        // Özel renkler eklendi
        navy: {
          DEFAULT: '#1a237e', // Lacivert
          dark: '#0d1333',
        },
        beige: {
          DEFAULT: '#f5f5dc', // Bej
          light: '#fafae3',
        },
        lightgray: {
          DEFAULT: '#f3f4f6', // Açık gri
          dark: '#e5e7eb',
        },
        // Velvet (Kadife) tema renkleri - Açık tonlar ve neon bej eklendi
        'velvet-navy': {
          DEFAULT: '#273c75', // Açık lacivert
          dark: '#19223a',
        },
        'velvet-blue': {
          DEFAULT: '#4a69bd', // Açık kadife mavi
          dark: '#22336b',
        },
        'velvet-gray': {
          DEFAULT: '#d6dbe7', // Açık gri
          light: '#f0f2fa',
        },
        'velvet-accent': {
          DEFAULT: '#1ecbe1', // Canlı accent (safir/turkuaz)
          dark: '#1599b3',
        },
        'neon-beige': {
          DEFAULT: '#fff7d6', // Neon bej
          glow: '#ffe9a7',
        },
        // Canlı ve modern renkler
        'vibrant-blue': {
          DEFAULT: '#6366f1', // canlı mavi
        },
        'vibrant-purple': {
          DEFAULT: '#7c3aed', // canlı mor
        },
        'neon-orange': {
          DEFAULT: '#ff9800', // neon turuncu
        },
        'neon-green': {
          DEFAULT: '#00e676', // neon yeşil
        },
        'neon-pink': {
          DEFAULT: '#ff3b82', // neon pembe
        },
        'soft-gray': {
          DEFAULT: '#f3f4f6', // açık gri
        },
        // Neon dark tema renkleri
        'dark-bg': {
          DEFAULT: '#10151a',
        },
        'card-bg': {
          DEFAULT: '#181f25',
        },
        'neon-blue': {
          DEFAULT: '#00f6ff',
        },
        'neon-orange': {
          DEFAULT: '#ffb300',
        },
        'light-text': {
          DEFAULT: '#eaf6fb',
        },
      },
      fontFamily: {
        'sans': ['Inter', 'system-ui', 'sans-serif'],
        'mono': ['JetBrains Mono', 'monospace'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'slide-down': 'slideDown 0.5s ease-out',
        'scale-in': 'scaleIn 0.3s ease-out',
        'gradient-move': 'gradientMove 16s linear infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0.9)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        gradientMove: {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
      },
    },
  },
  plugins: [],
} 