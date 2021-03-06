const camelCase = require('camelcase');
const path = require('path');
const webpack = require('webpack');
const pkg = require(path.join(process.cwd(), 'package.json'));
const shouldMininimize = process.argv.indexOf('--min') !== -1;
const HtmlWebpackPlugin = require('html-webpack-plugin');

const imageOpts = {
  bypassOnDebug: true,
  optipng: {
    optimizationLevel: 7
  },
  gifsicle: {
    interlaced: false
  }
};

const standardConfig = {
  devtool: 'source-map',
  entry: './src/components/app/index.js',
  output: {
    path: './dist',
    filename: 'index.js'
  },
  module: {
    loaders: [
      {
        test: /\.scss$/,
        loaders: ['style', 'css', 'sass']
      }, {
        test: /\.html$/,
        loader: 'html'
      }, {
        test: /\.(ttf|eot|svg|woff(2)?)(\?[a-z0-9=&.]+)?$/,
        loader: 'file'
      }, {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['react', 'es2015'],
          plugins: ['transform-object-rest-spread']
        }
      }, {
        test: /\.(jpe?g|png|gif|svg)$/i,
        loaders: ['file-loader?hash=sha512&digest=hex&name=[hash].[ext]', `image-webpack-loader?${JSON.stringify(imageOpts)}`]
      }
    ]
  },
  devServer: {
    port: 8001,
    contentBase: 'src/',
    inline: true,
    disableHostCheck: true,
    proxy: {
      '/api': {
        target: 'https://api.kdp0.com',
        pathRewrite: {
          '/api' : ''
        },
        secure: false,
        changeOrigin: true
      }
    }
  },
  plugins: [
    new webpack.ProvidePlugin({ '$': 'jquery', 'window.jQuery': 'jquery', 'window.$': 'jquery', 'Popper': 'popper.js' }),
    new HtmlWebpackPlugin({ template: 'src/index.html', hash: true, inject: false }),
    new webpack.optimize.UglifyJsPlugin({ include: /\.min\.js$/, minimize: true })
  ]
};

if (shouldMininimize) {
  Object.assign(standardConfig.entry, { 'dist/index.min.js': './src/config/app.js' });
}

module.exports = standardConfig;
