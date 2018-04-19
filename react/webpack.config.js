const path = require('path')

module.exports = {
  entry: './App.js',
  output: {
    path: path.join(__dirname, 'dist/assets'),
    filename: 'bundle.js',
    sourceMapFilename: 'bundle.map'
  },
  devtool: '#source-map',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules)/,
        loader: 'babel-loader',
        query: {
          presets: ['env', 'stage-0', 'react']
        }
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader', {
          loader: 'postcss-loader',
          options: {
            plugins: () => [require('autoprefixer')]
          }
        }]
      }
    ]
  },
  optimization: {
    minimize: true
  }
}