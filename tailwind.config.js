/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        hankenGrotesk: ['var(--font-hanken-grotesk)'],
        literata: ['var(--font-literata)'],
      },
    },
  },
  plugins: [],
}