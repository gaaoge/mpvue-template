<template>
  <div class="app-home">
    <div class="hello" @click="hello">hello mpvue</div>
    <app-logo></app-logo>
  </div>
</template>

<script>
  import AppLogo from 'components/Logo'

  export default {
    data () {
      return {}
    },
    components: {
      AppLogo
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
        imageUrl: '/static/share-icon.png'
      }
    }
  }
</script>

<style>
  .app-home {
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