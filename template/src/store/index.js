import Vue from 'vue'
import Vuex from 'vuex'
import options from './options'

Vue.use(Vuex)

const store = new Vuex.Store({
  strict: process.env.NODE_ENV !== 'production',
  ...options
})

export default store
