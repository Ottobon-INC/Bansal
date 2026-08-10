/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        college: {
          navy: '#24408E',
          navyLight: '#3252b3',
          gold: '#F4B400',
          goldLight: '#ffc429',
          dark: '#1a1a1a',
          light: '#ffffff',
          gray: '#333333'
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        serif: ['Merriweather', 'Georgia', 'serif'],
      }
    },
  },
  plugins: [],
}
