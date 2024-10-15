/** @type {import('tailwindcss').Config} */

const flowbite = require("flowbite-react/tailwind");


module.exports = {

  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    './public/index.html',
    './node_modules/flowbite-react/**/*.js',
    'node_modules/flowbite-react/lib/esm/**/*.js',
    flowbite.content(),
  ],

  theme: {
    extend: {}
  },
  plugins: [
    require('flowbite/plugin'),
    require('flowbite-typography'),
    flowbite.plugin(),
  ]
}
