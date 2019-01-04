// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// import Header from './components/Header.vue'
// import Footer from './components/Footer.vue'
// import Manh from './components/Manh.vue'
import blog from './components/blog.vue'
import VueResource from 'vue-resource'

Vue.use(VueResource)
Vue.config.productionTip = false
// Vue.component('ninjas', ninjas)
// Vue.component('app-manh',Manh)
// Vue.component('app-header',Header)
// Vue.component('app-footer',Footer)
Vue.component('app-blog',blog)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
