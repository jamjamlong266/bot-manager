import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Login from '@/components/Login'
import SignUp from '@/components/SignUp'
import Addsubscribe from '@/components/Addsubscribe'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/signup',
      name: 'SignUp',
      component: SignUp
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
<<<<<<< HEAD
    }
=======
    },
    {
      path: '/addsubscribe',
      name: 'Addsubscribe',
      component: Addsubscribe
    },
>>>>>>> add5b410be4715f30415e7d0ef2ba3f5b55bba10
  ]
})
