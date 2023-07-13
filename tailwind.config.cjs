/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'primary': '#e60012',
        'blue-dark': '#0b2b6b',
        'blue-light': '#d6f0fa',
        'white-soft': '#efefef',
        'black-soft': '#434242',
      },
    },
  },
  plugins: [],
}
