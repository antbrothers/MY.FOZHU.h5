const merge = require('webpack-merge');
const path = require('path');
const commonConfig = require('./webpack.common.config.js');
const webpack = require('webpack');
const devConfig = {
  devtool: 'inline-source-map',
  entry: {
    app: [
      'babel-polyfill',
      'react-hot-loader/patch',
      path.join(__dirname, 'src/index.js')
    ]
  },
  output: {
    /*这里本来应该是[chunkhash]的，但是由于[chunkhash]和react-hot-loader不兼容。只能妥协*/
    filename: '[name].[hash].js'
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader", "postcss-loader"]
      },
      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "sass-loader", "postcss-loader"],
        // scss 模块化
        // loader: 'style-loader!css-loader?modules&localIdentName=[name]__[local]!sass-loader!postcss-loader'
      },
      {
        test: /\.less$/,
        // less 模块化
        // loader: 'style-loader!css-loader?modules&localIdentName=[name]__[local]!less-loader!postcss-loader'
        use: ["style-loader", "css-loader", "less-loader", "postcss-loader",],
      }

    ]
  },
  devServer: {
    contentBase: path.join(__dirname, './dist'),
    historyApiFallback: true,
    host: '0.0.0.0',
    port: '8084',
    proxy: {
      '/familyweb/api/LiveStatistic/GetFamilyDetail': {
        target: 'http://langke-qas.lvb.eastmoney.com/',
        changeOrigin: true,
        secure: false
      },
      '/advert': {
        target: 'http://localhost:8081/',
        changeOrigin: true,
        secure: false
      }
    }
  }

};

module.exports = merge({
  customizeArray(a, b, key) {
    /*entry.app不合并，全替换*/
    if (key === 'entry.app') {
      return b;
    }
    return undefined;
  }
})(commonConfig, devConfig);