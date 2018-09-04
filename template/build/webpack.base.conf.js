/**
 * Created by GG on 2018/07/19.
 */

const alias = require('./webpack.alias.conf')
const merge = require('webpack-merge')

const path = require('path')
const webpack = require('webpack')
const target = require('mpvue-webpack-target')
const MPVueEntryPlugin = require('mpvue-entry')
const MpVueAssetPlugin = require('webpack-mpvue-asset-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')

const entry = MPVueEntryPlugin.getEntry('src/router/routes.js')

module.exports = merge.smart(alias, {
  entry,
  target,
  output: {
    path: path.resolve('dist'),
    filename: '[name].js'
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'mpvue-loader',
        options: {
          extractCSS: true,
          transformToRequire: {
            audio: 'src'
          }
        }
      },
      {
        test: /\.js$/,
        use: [
          'babel-loader',
          {
            loader: 'mpvue-loader',
            options: {
              checkMPEntry: true
            }
          }
        ],
        exclude: /node_modules/
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 10000,
              name: '[name].[hash:10].[ext]',
              outputPath: 'static/img/'
            }
          },
          {
            loader: 'tinify-loader',
            options: {
              apikey: 'ai3NQ23wq2pbQvy2JNylfuQMNJ99YAOZ',
              cache: path.resolve('node_modules/.cache/tinify')
            }
          }
        ]
      },
      {
        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: '[name].[hash:10].[ext]',
          outputPath: 'static/media/'
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: '[name].[hash:10].[ext]',
          outputPath: 'static/font/'
        }
      }
    ]
  },
  plugins: [
    new MPVueEntryPlugin(),
    new MpVueAssetPlugin(),
    new ExtractTextPlugin({
      filename: '[name].wxss'
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      minChunks: function (module) {
        return module.resource && /\.js$/.test(module.resource) && module.resource.indexOf('node_modules') >= 0
      }
    }),
    new CopyWebpackPlugin([{
      from: 'static',
      to: 'static'
    }])
  ]
})
