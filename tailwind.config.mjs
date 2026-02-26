/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#09090b',    // Very dark bg resembling IDE
        secondary: '#18181b',  // Slightly lighter for cards/sections
        tertiary: '#27272a',   // Borders/hover states
        accent: '#10b981',     // Terminal/emerald green
        info: '#3b82f6',       // Syntax blue
        warning: '#f59e0b',    // Syntax yellow
        error: '#ef4444',      // Syntax red
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'sans-serif'],
        mono: ['var(--font-jetbrains)', 'monospace'],
      },
    },
  },
  plugins: [],
};
