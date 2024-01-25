/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './public/**/*.html',
    './src/**/*.{js,jsx,ts,tsx,vue}',
    'node_modules/flowbite-vue/**/*.{js,jsx,ts,tsx,vue}',
    'node_modules/flowbite/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#6FDCBF',
        'primary-light': '#8CE3CC',
        'secondary': '#3A506B',
        'secondary-light': '#476385',
        'accent': '#F21B3F',
        'accent-light': '#F5516D'
      },
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}

