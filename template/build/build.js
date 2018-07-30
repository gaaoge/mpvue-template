/**
 * Created by GG on 2018/07/19.
 */

const pkg = require('../package.json')
const prod = require('./webpack.prod.conf')

const fs = require('fs')
const path = require('path')
const chalk = require('chalk')
const webpack = require('webpack')
const easeftp = require('easeftp/upload')
const ftppass = JSON.parse(fs.readFileSync('.ftppass', 'utf-8'))

console.log(chalk.cyan('building...'))
webpack(prod, (err, stats) => {
  if (err) throw err
  console.log(stats.toString({
    colors: true,
    modules: false,
    children: false
  }))

  easeftp.addFile(['**/*'], {
    ...ftppass.easeftp,
    path: 'activity/' + pkg.name + '/static',
    exclude: ['js/**/*', 'css/**/*'],
    debug: true,
    cwd: path.resolve('dist/static')
  })
})
