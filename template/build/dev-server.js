/**
 * Created by GG on 2018/07/19.
 */

const dev = require('./webpack.dev.conf')

const chalk = require('chalk')
const webpack = require('webpack')
const devServer = require('webpack-dev-middleware-hard-disk')

devServer(webpack(dev), {
  publicPath: dev.output.publicPath,
  quiet: true
})

console.log(chalk.cyan('dev-server started!'))
