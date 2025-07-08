/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      screens: {
        '2xl': '1536px',
        '3xl': '1920px',
        '4xl': '2560px',
      },
      maxWidth: {
        '8xl': '1536px',
        '9xl': '1920px',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'primary-dark': 'var(--primary-dark)',
        'primary-medium': 'var(--primary-medium)',
        'secondary-light': 'var(--secondary-light)',
        'secondary-lighter': 'var(--secondary-lighter)',
        'accent-purple': 'var(--accent-purple)',
        'accent-blue': 'var(--accent-blue)',
        'white-soft': 'var(--white-soft)',
        'white-muted': 'var(--white-muted)',
        'white-faded': 'var(--white-faded)',
        'header-bg': 'var(--header-bg)',
        'about-bg': 'var(--about-bg)',
        'skills-bg': 'var(--skills-bg)',
        'services-bg': 'var(--services-bg)',
        'projects-bg': 'var(--projects-bg)',
        'contact-bg': 'var(--contact-bg)',
        'footer-bg': 'var(--footer-bg)',
      },
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
        'montserrat': ['Montserrat', 'sans-serif'],
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
        'slow-spin': 'spin 10s linear infinite',
        'blink': 'blink 1s step-end infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        glow: {
          '0%': { 
            boxShadow: '0 0 5px rgba(87, 226, 217, 0.2)',
            borderColor: '#57E2D9'
          },
          '100%': { 
            boxShadow: '0 0 20px rgba(87, 226, 217, 0.5)',
            borderColor: '#3A8A87'
          },
        },
        'pulse-glow': {
          '0%, 100%': {
            boxShadow: '0 0 5px rgba(87, 226, 217, 0.2)',
          },
          '50%': {
            boxShadow: '0 0 15px rgba(87, 226, 217, 0.5)',
          },
        },
        blink: {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: 0 },
        },
      },
      boxShadow: {
        'neon': 'var(--neon-glow)',
        'purple': 'var(--purple-glow)',
        'blue': 'var(--blue-glow)',
      },
      opacity: {
        '3': '0.03',
        '5': '0.05',
      },
      fontSize: {
        '2xs': '0.65rem',
      },
    },
  },
  plugins: [],
} 