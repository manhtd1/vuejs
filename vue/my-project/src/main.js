// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// import Header from './components/Header.vue'
// import Footer from './components/Footer.vue'
// import Manh from './components/Manh.vue'
import blog from './components/blog.vue'
import showBlogs from './components/showBlogs.vue'
import VueResource from 'vue-resource'

Vue.use(VueResource)
Vue.config.productionTip = false
Vue.directive('rainbow',{
  bind(el,binding,vnode){
    el.style.color = '#'+ Math.random().toString().slice(3,9)
  }
})
// Vue.component('ninjas', ninjas)
// Vue.component('app-manh',Manh)
// Vue.component('app-header',Header)
// Vue.component('app-footer',Footer)
Vue.component('app-blog',blog)
Vue.component('show-blogs',showBlogs)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
