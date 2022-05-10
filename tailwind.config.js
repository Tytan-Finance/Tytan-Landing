module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    screens: {
      'xm': '320px',
      // => @media (min-width: 320px) { ... }

      'sm': '480px',
      // => @media (min-width: 480px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'white': '#ffffff',
      'black': '#000',
      'green': '#00FFA3',
      'red': '#FF005C',
    },
    fontFamily: {
      'Planer-Bold': ['Planer-Bold', 'sans-serif'],
      'Planer-DemiBold': ['Planer-DemiBold', 'sans-serif'],
      'Planer-DemiBoldItalic': ['Planer-DemiBoldItalic', 'sans-serif'],
      'Planer-ExtraBold': ['Planer-ExtraBold', 'sans-serif'],
      'Planer-ExtraBoldItalic': ['Planer-ExtraBoldItalic', 'sans-serif'],
      'Planer-ExtraLight': ['Planer-ExtraLight', 'sans-serif'],
      'Planer-Italic': ['Planer-Italic', 'sans-serif'],
      'Planer-Light': ['Planer-Light', 'sans-serif'],
      'Planer-Medium': ['Planer-Medium', 'sans-serif'],
      'Planer-MediumItalic': ['Planer-MediumItalic', 'sans-serif'],
      'Planer-Regular': ['Planer-Regular', 'sans-serif'],

    },
    extend: {},
  },
  plugins: [],
}
