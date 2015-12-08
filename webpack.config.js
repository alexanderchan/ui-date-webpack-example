const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {

  entry: './src/app.js',

  output: {
    path: __dirname + '/dist',
    filename: 'bundle.js',
    hash: true
  },

  module: {
    loaders: [
      {
        test: /(\.js$|\.jsx$)/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel',
        query: {
          presets: ['es2015']
        }
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader'
      },
      {
        test: /\.(png|jpg|gif)$/,
        loader: 'url-loader?limit=8192'
      } // inline base64 URLs for <=8k images, direct URLs for the rest
    ]
  },

  plugins: [
    new HtmlWebpackPlugin({ // Also generate a test.html
      filename: 'index.html',
      template: 'src/index.html',
      inject: 'body'
    }),
  ],

  devtool: '#cheap-source-map',
  devServer: {
    contentBase: "./dist",
  }
}
