import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import App from './App.vue'
import routes from './router/router'
import VueRouter from 'vue-router'

Vue.use(ElementUI)
Vue.use(VueRouter)

const router = new VueRouter({routes})
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
