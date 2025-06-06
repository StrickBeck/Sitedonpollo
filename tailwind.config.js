/** @type {import('tailwindcss').Config} */
export default {
  content: ["./components/**/*.{vue,js,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",],
  theme: {
    extend: {
      screens: {
        'max-sm': { 'max': '480px' },
      },
    },
  },
  plugins: [],
}

