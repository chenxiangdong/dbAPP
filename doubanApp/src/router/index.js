import Vue from 'vue'
import Router from 'vue-router'
import index from '../page/index/index.vue'

Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path:'/home',
      name:'home',
      component:resolve =>{require(['../page/home.vue'],resolve)},
      redirect: '/home/index',
      children:[
        {
          path: 'index',
          name: 'index',
          component: resolve => {require(['../page/index/index.vue'], resolve)}
        },
        {
          path: 'broadcast',
          name: 'broadcast',
          component:resolve => {require(['../page/broadCast/broadCast.vue'], resolve)}
        },
        {
          path: 'audiobook',
          name: 'audiobook',
          component: resolve => {require(['../page/audioBook/audioBook.vue'], resolve)},
          redirect:'/home/audiobook/movie',
          children:[
            {
              path:'movie',
              name:'movie',
              component:resolve =>{require(['../page/audioBook/page/movie.vue'],resolve)}
            },
            {
              path:'book',
              name:'book',
              component:resolve =>{require(['../page/audioBook/page/book.vue'],resolve)}
            },
            {
              path:'city',
              name:'city',
              component:resolve =>{require(['../page/audioBook/page/city.vue'],resolve)}
            },
            {
              path:'music',
              name:'music',
              component:resolve =>{require(['../page/audioBook/page/music.vue'],resolve)}
            }
          ]
        },
        {
          path: 'mine',
          name: 'mine',
          component: resolve => {require(['../page/mine/mine.vue'], resolve)}
        }
      ]
    },
    {
      path:'/home/audiobook/search/:id',
      name:'search',
      component: resolve =>{require(['../page/audioBook/search.vue'],resolve)}
    },
    {
      path:'/home/audiobook/movie/:id',
      name:'details',
      component: resolve => {require(['../page/audioBook/movie.vue'],resolve)}
    },
    {
      path:'/home/audiobook/book/:id',
      name:'intro',
      component: resolve =>{require(['../page/audioBook/book.vue'],resolve)}
    },
    {
      path: '/',
      redirect: '/home/index'
    },
    {
      path: '*',
      redirect: '/home/index'
    }
  ]
})
