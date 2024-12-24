/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'wingman-blue': '#1DA1F2', 
        'wingman-green': '#115E56',
        'wingman-iconGreen': '#15B79F',
        'wingman-teal': '#CCFBEF',
        'wingman-turquiose': '#15879F',
        'wingman-red': '#F04438',
        'wingman-yellow': '#FFF3C6',
        'wingman-black': '#212636',
        'wingman-gray': '#667085',
        'wingman-lightgray': '#8A94A6',
      },
    },
  },
  plugins: [],
}

