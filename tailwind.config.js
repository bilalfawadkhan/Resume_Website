/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./build/*.html'],
  theme: {
    extend: {
      colors: {
        customPink: '#F7CFD8', // Add your custom color
        customPinkDark:'#f1aaba', // Add your custom color
        customYellow: `#9EC6F3`, // Add your custom color
        customYellowDark: '#579cea', // Add your custom color
        customTeal: `#87c8c8`, // Add your custom color
        customTealDark: '#58b2b2', // Add your custom color
        customPurple: `#8E7DBE`, // Add your custom color
        customPurpleDark: '#8471b8', // Add your custom color
      },
    },
  },
  plugins: [],
}

