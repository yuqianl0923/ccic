import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import About from '@/components/about'
import CustomersHome from '@/components/CustomersHome'
import CustomerPage from '@/components/CustomerPage'
import BlogHome from '@/components/BlogHome'
import BlogPost from '@/components/BlogPost'
import Contact from '@/components/Contact'
import Services from '@/components/Services'
import ServicePreShip from '@/components/ServicePreShip'
import ServiceUsed from '@/components/ServiceUsed'
import FoodProduction from '@/components/FoodProduction'
import News from '@/components/News'
import Download from '@/components/Download'
import Career from '@/components/Career'
Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '/customers/',
      name: 'customers-home',
      component: CustomersHome
    },
    {
      path: '/customers/:slug',
      name: 'customer-page',
      component: CustomerPage
    },
    {
      path: '/contact',
      name: 'contact',
      component: Contact
    },
    {
      path: '/download',
      name: 'download',
      component: Download
    },
    {
      path: '/news',
      name: 'news',
      component: News
    },
    {
      path: '/blog/',
      name: 'blog-home',
      component: BlogHome
    },
    {
      path: '/blog/:slug',
      name: 'blog-post',
      component: BlogPost
    },
    {
      path: '/career',
      name: 'career',
      component: Career
    },
    { 
      path: '/preship', 
      component: ServicePreShip
    },
    { 
      path: '/foodproduction', 
      component: FoodProduction
    },    
    { 
      path: '/shippingused', 
      component: ServiceUsed
    }
    // { path: '/services/:slug', component: Services,
    //     children: [
    //       {
    //          path: 'preship',
    //          component: ServicePreShip
    //       }
    //     ]
    //   }
  ],
  scrollBehavior (to, from, savedPosition) {
  return { x: 0, y: 0 }
  }
})
