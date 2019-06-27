import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'

import ContactForm from '@/components/ContactForm'
import ContactList from '@/components/ContactList'

const routes = [
  { path: '/contacts', component: ContactList},
  { path: '/add-contact', component: ContactForm}
]

const router = new VueRouter({
  routes: routes
})

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
