import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {   
      path: '/index.html',
      component: Home,
      alias: '/'
    },
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('./views/About.vue')
    },
    {
      path: '/detail/:imdb',
      name: 'detail',
      component: () => import('./views/Detail.vue')
    }
  ]
})
