import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/pages/Home'
import PostDetail from '@/components/pages/PostDetail'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/post/:id',
      name: 'PostDetail',
      component: PostDetail
    }
  ]
})
