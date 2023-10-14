/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    safelist: ['animate-[fade-in_1s_ease-in-out]', 'animate-[fade-in-down_1s_ease-in-out]', 'animate-[slide-right_1s_ease-in-out]'],
    extend: {
      fontFamily: {
        'display': ['Helvetica'],
        'body': ['Helvetica'],
      },
    },
  },
  plugins: [],
}
