/**
 * Created by GG on 2018/07/19.
 */

import Vue from 'vue'
import router from './router'
import store from './store'
import App from './App'

// Vue实例
const app = new Vue({
  router,
  store,
  ...App
})
app.$mount()

export default {
  config: {
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#fff',
      navigationBarTitleText: 'mpvue',
      navigationBarTextStyle: 'black'
    }
  }
}
