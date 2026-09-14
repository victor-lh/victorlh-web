/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        bg: 'var(--bg)',
        ink: 'var(--ink)',
        'ink-soft': 'var(--ink-soft)',
        accent: 'var(--accent)',
        'accent-soft': 'var(--accent-soft)',
        surface: 'var(--surface)',
        line: 'var(--line)',
        white: 'var(--white)',
      },
      fontFamily: {
        display: ['var(--font-display)'],
        sans: ['var(--font-sans)'],
        mono: ['var(--font-mono)'],
      },
      borderRadius: {
        sm: 'var(--radius-sm)',
        lg: 'var(--radius-lg)',
      },
    },
  },
  plugins: [],
};
