<template>
  <div id="app">
    <v-header></v-header>
    <router-view></router-view>
    <v-footer></v-footer>
  </div>
</template>

<script>
  import header from './components/header.vue'
  import commodity from './components/commodity/commodity.vue'
  import footer from './components/footer.vue'
  export default {
    components: {
      'v-header': header,
      'v-commodity': commodity,
      'v-footer': footer
    },
    data () {
      return {
        msg: ''
      }
    }
  }
</script>

<style lang="scss">
  @import "./css/reset.css";
  @import "./css/header";
  @import "./css/commodity";
  @import "./css/footer";
  @import "./font_6bu9pvidey0c0udi/demo.css";
  @import "./font_6bu9pvidey0c0udi/iconfont.css";

  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
  }
</style>
