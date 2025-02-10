/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './pages/**/*.{js,vue}',
    './components/**/*.{js,vue}',
    './layouts/**/*.{js,vue}',
    './plugins/**/*.{js,vue}',
    './nuxt.config.{js,ts}',  // Optional, in case of dynamic config
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

