<template>
  <div class="home">
    <div class="hello" @click="hello">hello mpvue</div>
    <home-logo></home-logo>
  </div>
</template>

<script>
  import HomeLogo from './components/Logo'
  import { getStaticPath } from '@/utils'

  export default {
    name: 'home',
    components: {
      HomeLogo
    },
    methods: {
      hello () {
        wx.showToast({
          title: 'hello mpvue',
          icon: 'none'
        })
      }
    },
    onShareAppMessage () {
      return {
        title: 'hello mpvue!',
        path: '/pages/Home',
        imageUrl: getStaticPath('share-icon.png')
      }
    }
  }
</script>

<style>
  .home {
    height: 100vh;

    & .hello {
      padding: 150px 0;
      font-size: 80px;
      font-weight: bold;
      text-align: center;
      line-height: 200px;
    }
  }
</style>