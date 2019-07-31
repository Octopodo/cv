import Vue from 'vue'
import Router from 'vue-router'
import firebase from 'firebase/app'
import Admin from'@/views/Admin.vue'
import Login from '@/components/Login.vue'
import i18n from './i18n'
Vue.use(Router)
const router =  new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path:'/',
      redirect: `/${i18n.locale}/home`
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/admin',
      name: 'admin',
      component: Admin,
      meta: {
        authenticated: true
      },
      beforeEnter: (to, from, next) => {
        let user = firebase.auth().currentUser;
        let autorization = to.matched.some(record => record.meta.authenticated);
      
        if(autorization && !user) {
          next('login')
        } else if (!autorization && user){
          next('admin')
        } else {
          next()
        }
      }
    },
    {
      path: '/:lang',
      component: {
        render(c) {return c('router-view')}
      }, 
      children: [
        {
          path: '',
          redirect: 'home'
        },
        {
          path: 'home',
          name: 'home',
        }, 
        {
          path: 'info',
          name: 'info',

        },
        {
          path: 'tools',
          name: 'tools',
        },
        {
          path: 'blog',
          name: 'blog',
        },
        {
          path: 'contact',
          name: 'contact',
        },
      ]
    },
  ]
    

})

router.beforeEach((to, from, next) => {
  let user = firebase.auth().currentUser;
  let autorization = to.matched.some(record => record.meta.authenticated);
  let language = to.params.lang;

  if(!language) {
    language = 'en'
  }

  i18n.locale = language;

  if(autorization && !user) {
    next('login')
  } else if (!autorization && user){
    next('admin')
  } else {
    next()
  }
})

export default router