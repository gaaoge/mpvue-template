<template>
  <div class="app-logo">
    <img src="../assets/logo.png" />
    <button open-type="share"></button>
  </div>
</template>

<script>
  export default {
    name: 'app-logo',
    data () {
      return {}
    }
  }
</script>

<style>
  .app-logo {
    position: relative;

    & > img {
      display: block;
      width: 500px;
      height: 400px;
      margin: 0 auto;
    }

    & > button {
      position: absolute;
      left: 125px;
      top: 0;
      width: 500px;
      height: 400px;
      opacity: 0;
    }
  }
</style>