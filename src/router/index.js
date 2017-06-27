import Vue from 'vue'
import Router from 'vue-router'
import commodity from '../components/commodity/commodity.vue'
import evaluate from '../components/evaluate/evaluate.vue'
import business from '../components/business/business.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/commodity',
      component: commodity
    },
    {
      path: '/evaluate',
      component: evaluate
    },
    {
      path: '/business',
      component: business
    }
  ]
})
