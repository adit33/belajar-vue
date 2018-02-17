import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Home from  '@/components/pages/Home'
import About from '@/components/pages/About' 
import Portofolio from '@/components/pages/Portofolio'
import User from '@/components/pages/user/Lists'
Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
    	path:'/About',
    	name:'About',
    	component:About
    },
    {
    	path:'/Portofolio',
    	name:'Portofolio',
    	component:Portofolio
    },
    {
      path:'/User',
      name:'User',
      component:User
    }
  ]
})
