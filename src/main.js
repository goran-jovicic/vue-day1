import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'

Vue.use(VueRouter)

import ContactForm from '@/components/ContactForm'
import ContactList from '@/components/ContactList'
import SingleContact from '@/components/SingleContact'

const routes = [
  { path: '/add-contact', component: ContactForm},
  { path: '/contacts', component: ContactList},
  { path: '/contact/:id', component: SingleContact}
]

const router = new VueRouter({
  routes: routes,
  mode: 'history',
  linkActiveClass: 'test'
})

Vue.config.productionTip = false

new Vue({
  router: router,
  render: h => h(App),
}).$mount('#app')
