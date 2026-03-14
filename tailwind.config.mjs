import typography from '@tailwindcss/typography';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'sans-serif'],
      },
      colors: {
        primary: 'var(--color-primary, #4f46e5)', // Indigo-600
        secondary: 'var(--color-secondary, #334155)', // Slate-700
        muted: 'var(--color-muted, #f8fafc)', // Slate-50
      }
    },
  },
  plugins: [typography],
}
