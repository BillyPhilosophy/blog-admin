/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx,vue}'
  ],
  whitelistPatterns:[/el-.+$/],
  whitelistPatternsChildren: [/el-.+$/],
  theme: {
    extend: {},
  },
  prefix: 'tw-',
  plugins: [
    
  ],
}
