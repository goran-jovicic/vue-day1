import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'

Vue.use(VueRouter)

import ContactForm from '@/components/ContactForm'
import ContactList from '@/components/ContactList'

const routes = [
  { path: '/contacts', component: ContactList},
  { path: '/add-contact', component: ContactForm}
]

const router = new VueRouter({
  routes: routes,
  mode: 'history'
})

Vue.config.productionTip = false

new Vue({
  router: router,
  render: h => h(App),
}).$mount('#app')
