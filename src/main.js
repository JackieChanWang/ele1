// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
Vue.config.productionTip = false
/* eslint-disable no-new */
window.addEventListener('orientationchange', setRem)
window.addEventListener('resize', setRem)
setRem()
function setRem () {
  let html = document.querySelector('html')
  let width = html.getBoundingClientRect().width
  html.style.fontSize = width / 16 + 'px'
}
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: {App}
})
