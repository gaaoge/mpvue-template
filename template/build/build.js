/**
 * Created by GG on 2018/07/19.
 */

const prod = require('./webpack.prod.conf')

const chalk = require('chalk')
const webpack = require('webpack')

console.log(chalk.cyan('building...'))
webpack(prod, (err, stats) => {
  if (err) throw err
  console.log(stats.toString({
    colors: true,
    modules: false,
    children: false
  }))

  console.log(chalk.cyan('build success!'))
})
