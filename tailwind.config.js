/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./build/*.html'],
  theme: {
    extend: {
      colors: {
        customPink: '#F7CFD8', // Add your custom color
        customPinkDark:'#f1aaba', // Add your custom color
        customYellow: `#F4F8D3`, // Add your custom color
        customYellowDark: '#f0f5c2', // Add your custom color
        customTeal: `#A6D6D6`, // Add your custom color
        customTealDark: '#bbe0e0', // Add your custom color
        csutomPurple: `#8E7DBE`, // Add your custom color
        csutomPurpleDark: '#8471b8', // Add your custom color
      },
    },
  },
  plugins: [],
}

