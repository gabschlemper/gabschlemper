/** @type {import('tailwindcss').Config} */

module.exports = {
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      white: '#fff',
      black: '#000',
      grey: {
        100: '#7C7C7C',
        200: '#454545',
        300: '#181818',
      },
    },
  },
  extend: {
    backgroundImage: {
      backgroungImage: "url('./src/images/background.png')",
    },
  },
  content: [
    './src/pages/**/*.{js,jsx,ts,tsx}',
    './src/components/**/*.{js,jsx,ts,tsx}',
  ],

  plugins: [],
};
