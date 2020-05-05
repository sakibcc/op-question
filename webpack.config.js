const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
  entry: {
    app: './src/main.js'
  },
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.less$/,
        use: [
          'style-loader',
          'css-loader',
          'less-loader'
        ]
      },
      {
        test: /\.js$/,
        exclude: '/node_modules/',
        use: [
          {
            loader: 'babel-loader'
          }
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html',
      filename: 'index.html',
      minify: {
        collapseWhitespace: true
      }
    }),
  ]
}
