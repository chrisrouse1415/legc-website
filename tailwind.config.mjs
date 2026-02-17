/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#e6f2ff',
          100: '#b3d7ff',
          200: '#80bcff',
          300: '#4da1ff',
          400: '#1a86ff',
          500: '#006ccf',
          600: '#005eb5',
          700: '#004d94',
          800: '#003b73',
          900: '#002a52',
          950: '#001a35',
        },
        accent: {
          50: '#fff5e0',
          100: '#ffe4b3',
          200: '#ffd080',
          300: '#ffbc4d',
          400: '#ffab26',
          500: '#ff9800',
          600: '#e88a00',
          700: '#c67500',
          800: '#a36000',
          900: '#7a4800',
        },
        slate: {
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
          950: '#020617',
        },
      },
      fontFamily: {
        sans: ['"Source Sans 3"', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'sans-serif'],
        display: ['"DM Serif Display"', 'Georgia', 'serif'],
      },
    },
  },
  plugins: [],
};
