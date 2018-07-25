/**
 * Created by GG on 2018/07/19.
 */

const alias = require('./webpack.alias.conf')
const merge = require('webpack-merge')

const path = require('path')
const webpack = require('webpack')
const target = require('mpvue-webpack-target')
const MPVueEntryPlugin = require('mpvue-entry')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')

const entry = MPVueEntryPlugin.getEntry('src/router/routes.js')

module.exports = merge.smart(alias, {
  entry,
  target,
  output: {
    path: path.resolve('dist'),
    filename: 'static/js/[name].js'
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'mpvue-loader',
        options: {
          loaders: {
            css: ExtractTextPlugin.extract({
              use: ['css-loader', 'postcss-loader'],
              fallback: 'style-loader'
            })
          },
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
        test: /\.css$/,
        use: [
          'css-loader',
          'postcss-loader'
        ]
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]',
          outputPath: '/static/img/'
        }
      },
      {
        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]',
          outputPath: '/static/media/'
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]',
          outputPath: '/static/font/'
        }
      }
    ]
  },
  plugins: [
    new MPVueEntryPlugin(),
    new ExtractTextPlugin({
      filename: 'static/css/[name].wxss'
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      minChunks: function (module) {
        return module.resource && /\.js$/.test(module.resource) && module.resource.indexOf('node_modules') >= 0
      }
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'manifest',
      chunks: ['vendor']
    }),
    new CopyWebpackPlugin([{
      from: 'static',
      to: 'static'
    }])
  ]
})
