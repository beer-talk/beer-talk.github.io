import typography from '@tailwindcss/typography';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['"Space Grotesk"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      colors: {
        primary: '#ff7e33', // Vibrant Orange
        secondary: '#1e293b', // Slate-800
        accent: '#00f0ff', // Cyan glow
        muted: '#f8fafc', // Slate-50
      },
      boxShadow: {
        'neon': '0 0 15px theme("colors.accent / 40%")',
        'neon-primary': '0 0 20px theme("colors.primary / 40%")'
      }
    },
  },
  plugins: [typography],
}
