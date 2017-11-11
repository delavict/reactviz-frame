var webpack = require('webpack');
var path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
var HtmlWebpackPlugin = require("html-webpack-plugin");

const extractSass = new ExtractTextPlugin({
    filename: "infinite.bundle.css",
    disable: true//process.env.NODE_ENV === "development"
});

module.exports = {
  entry: [
    'webpack-dev-server/client?http://localhost:8080',
    'webpack/hot/only-dev-server',
    './src/index.jsx'
  ],
  devtool: "source-map", // any "source-map"-like devtool is possible
  module: {
    loaders: [{
      test: /\.jsx?$/,
      exclude: /node_modules/,
      loader: 'react-hot-loader!babel-loader'
    },
    {
      test: /\.scss$/,
        use: extractSass.extract({
            use: [{
                loader: "css-loader", options: {
                  sourceMap: true
                }
            }, {
                loader: "sass-loader", options: {
                  sourceMap: true
                }
            }],
            // use style-loader in development
            fallback: "style-loader"
        })
      },
      {
      test: /\.(jpe?g|png|gif|svg)$/i,
      loader: "file-loader?name=/assets/[name].[ext]"
  }]
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  output: {
    path: path.join(__dirname, 'dist/'),
    publicPath: '/',
    filename: 'bundle.js'
  },
  node: {
    fs: "empty"
  },
  devServer: {
    contentBase: './dist',
    hot:true
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    extractSass,
    new HtmlWebpackPlugin(), // Generates default index.html
    new HtmlWebpackPlugin({  // Also generate a test.html
      filename: 'index.html',
      template: 'src/index.html'
    })
  ]
};