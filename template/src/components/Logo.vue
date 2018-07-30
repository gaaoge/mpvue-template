<template>
  <div class="app-logo">
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
    width: 500px;
    height: 400px;
    margin: 0 auto;
    background-image: url("../assets/logo.png");
    background-size: cover;

    & > button {
      position: absolute;
      left: 0;
      top: 0;
      width: 500px;
      height: 400px;
      opacity: 0;
    }
  }
</style>