/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        nexus: {
          blue: '#2563EB',
          'blue-dark': '#1E40AF',
          'blue-light': '#3B82F6',
          navy: '#0F172A',
          'navy-light': '#1E293B',
          cyan: '#06B6D4',
          'cyan-light': '#22D3EE',
          surface: '#F8FAFC',
          'surface-alt': '#F1F5F9',
          border: 'rgba(0, 0, 0, 0.06)',
          'border-strong': 'rgba(0, 0, 0, 0.12)',
          'text-primary': '#0F172A',
          'text-secondary': '#64748B',
          'text-tertiary': '#94A3B8',
          dark: '#0A0A0F',
          'dark-surface': '#12121A',
          'dark-border': 'rgba(255, 255, 255, 0.08)',
        },
      },
      fontFamily: {
        display: ['"SF Pro Display"', '-apple-system', 'BlinkMacSystemFont', 'system-ui', 'sans-serif'],
        body: ['"SF Pro Display"', '-apple-system', 'BlinkMacSystemFont', 'system-ui', 'sans-serif'],
        serif: ['"EB Garamond"', 'Georgia', 'serif'],
        mono: ['"JetBrains Mono"', '"SF Mono"', 'monospace'],
      },
      letterSpacing: {
        'display': '-0.035em',
        'heading': '-0.025em',
        'tight-sm': '-0.015em',
      },
      animation: {
        'fade-up': 'fadeUp 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'fade-in': 'fadeIn 0.5s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'slide-in-right': 'slideInRight 0.5s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'counter': 'counter 2s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'gradient': 'gradientMove 8s ease infinite',
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 3s ease-in-out infinite',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideInRight: {
          '0%': { opacity: '0', transform: 'translateX(-16px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        gradientMove: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        glow: {
          '0%, 100%': { opacity: '0.4' },
          '50%': { opacity: '0.8' },
        },
      },
    },
  },
  plugins: [],
};
