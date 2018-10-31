import Vue from 'vue'
import Router from 'vue-router'
import questions from '@/components/questions'
import home from '@/components/home'
import profile from '@/components/profile'
import register from '@/components/register'
import login from '@/components/login'
<<<<<<< HEAD
import splsh from '@/components/splsh'
=======
import webcam from '@/components/webcam'
>>>>>>> 57ec9b98ce0b31895fd78068cac83dfc0f7c7f76
Vue.use(Router)
export default new Router({
  routes: [
    {
      path:'/',
      redirect:'/home'
    },
      {
      path: '/questions',
      name: 'questions',
      component: questions
    },
    {
      path: '/home',
      name: 'home',
      component: home
    },
    {
      path:'/profile/:total1/:total2',
      name:'profile',
      component:profile
    },
    {
      path:'/register',
      name:'register',
      component:register
    },
    {
      path: '/login',
      name: 'login',
      component: login
<<<<<<< HEAD

    } ,  
    {
      path: '/splash',
      name: 'splsh',
      component: splsh

    }  
=======
    },
    {
      path: '/webcam',
      name: 'webcam',
      component: webcam
    }   
>>>>>>> 57ec9b98ce0b31895fd78068cac83dfc0f7c7f76
  ]
})
