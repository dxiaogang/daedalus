import Vue from 'vue'
import Router from 'vue-router'
import Hello from 'pages/home/Hello'
import PersonCenter from 'pages/person/PersonCenter'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/',
      name: 'PersonCenter',
      component: PersonCenter
    }
  ]
})
