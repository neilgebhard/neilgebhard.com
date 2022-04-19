const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    colors: {
      gray: colors.neutral,
      twitter: '#1da1f2',
      'linked-in': '#0077b5',
      google: '#ea4335'
    },
    extend: {}
  },
  darkMode: 'class',
  plugins: [require('@tailwindcss/typography')],
  corePlugins: {
    preflight: false
  }
}
