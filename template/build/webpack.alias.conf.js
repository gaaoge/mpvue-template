/**
 * Created by GG on 2018/07/19.
 */

const path = require('path')

module.exports = {
  resolve: {
    extensions: ['.js', '.css', '.vue', '.json'],
    alias: {
      vue: 'mpvue',
      'vue-router': 'mpvue-router-patch',
      '@': path.resolve('src')
    }
  }
}
