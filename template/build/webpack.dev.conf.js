/**
 * Created by GG on 2018/07/19.
 */

const base = require('./webpack.base.conf')
const merge = require('webpack-merge')

const webpack = require('webpack')

module.exports = merge.smart(base, {
  devtool: '#source-map',
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': '"development"'
    })
  ]
})
