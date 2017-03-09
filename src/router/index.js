import Vue from 'vue'
import Router from 'vue-router'
import Home from 'pages/home/Home'
import PersonCenter from 'pages/person/PersonCenter'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/person',
      name: 'PersonCenter',
      component: PersonCenter
    }
  ]
})
