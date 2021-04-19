import Vue from 'vue'
import App from './App.vue'
import moment from 'moment'
import VueRouter from 'vue-router'
import VueMeta from 'vue-meta'
import Routes from './router'
import store from './store'

Vue.config.productionTip = false

Vue.use(VueRouter)
Vue.use(VueMeta)

const router = new VueRouter({
  routes:Routes,
  mode:"history"
});

router.beforeEach((to, from, next) => {
  document.title = to.meta.title
  next()
});

Vue.filter('formatDate', function(value) {
  if (value) {
    // return moment(String(value)).format('DD/MM/YYYY hh:mm')
    return moment(String(value)).format('DD/MM/YYYY')
  }
});

new Vue({
  router:router,
  store: store,
  render: h => h(App),
}).$mount('#app')
