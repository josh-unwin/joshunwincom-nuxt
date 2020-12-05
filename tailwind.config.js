module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: [
    './**/*.vue',
  ],
  theme: {
    fontFamily: {
      'nunito': ['Nunito'],
    },
    extend: {
      colors: {
        'josh-blue': '#70D6FF',
        'body-gray': '#363537',
        'link-blue': '#6dc7eb',
      }
    },
  },
  variants: {},
  plugins: [],
}
