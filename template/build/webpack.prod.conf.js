/**
 * Created by GG on 2018/07/19.
 */

const base = require('./webpack.base.conf')
const merge = require('webpack-merge')

const webpack = require('webpack')
const CleanWebpackPlugin = require('clean-webpack-plugin')

module.exports = merge.smart(base, {
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': '"production"'
    }),
    new CleanWebpackPlugin(['../dist'], {
      allowExternal: true,
      verbose: false
    })
  ]
})
