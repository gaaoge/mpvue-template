/**
 * Created by GG on 2018/07/19.
 */

const dev = require('./webpack.dev.conf')

const chalk = require('chalk')
const webpack = require('webpack')
const middleware = require('webpack-dev-middleware-hard-disk')
const express = require('express')

const app = express()
app.use('/', express.static('dist'))
app.use(middleware(webpack(dev), {
  publicPath: dev.output.publicPath,
  quiet: true,
  watchOptions: {
    ignored: /node_modules/
  }
}))

app.listen(3200, function () {
  console.log(chalk.cyan('dev-server started!'))
  console.log(chalk.magenta('listening at http://localhost:3200/'))
})
