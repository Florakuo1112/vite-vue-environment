import { createRouter, createWebHashHistory } from 'vue-router'
//import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHashHistory (import.meta.env.BASE_URL),
  linkActiveClass:'active',
  routes: [
    {
      path:'/',
      name: 'home',
      component: () => import('../views/frontview/HomeView.vue')
    },
    {
      path: '/products',
      name: 'ProductList',
      component: () => import('../views/frontview/ProductsView.vue')
    },
    {
      path: '/products/:id',
      name: 'Product',
      component: () => import('../views/frontview/ProductView.vue')
    },
    {
      path: '/cart',
      name: 'cart',
      component: () => import('../views/frontview/CartView.vue')
    }
,
    {
      path:'/admin',
      component: () => import('../views/dashboard/DashboardView.vue'),
      children:[
        {
          path:'products',
          component: () => import('../views/dashboard/AdminProducts.vue')
        },
        {
          path: 'login',
          name: 'login',
          component: () => import('../views/dashboard/LogInView.vue')
        },
        {
          path: 'order',
          name: 'order',
          component: () => import('../views/dashboard/OrderView.vue')
        },
        {
          path: 'coupon',
          name: 'coupon',
          component: () => import('../views/dashboard/CouponView.vue')
        },
      ],
      
    }
,
    //404
    {
      path:'/:pathMatch(.*)*',
      component:()=>import('../views/frontview/NotFound.vue')
    },


  ]
})

export default router
