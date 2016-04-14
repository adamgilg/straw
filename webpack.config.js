module.exports = {
  entry: './components/main.jsx',
  output: {
    'public/bundle.js'
  },
  module: {
    loaders: {
      test: /\.jsx$/,
      exclude: /(node_modules)/,
      loader: 'babel',
      query: {
        presets: ['react']
      }
    }
  }
}