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
        'primary': '#249476',
        'primary-light': '#2CB590',
        'secondary': '#3A506B',
        'secondary-light': '#476385',
        'accent': '#FF3E5E',
        'accent-light': '#F57087'
      },
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}

