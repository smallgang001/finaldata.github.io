import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue'),
  },
  {
    path:'/detail',
    component:()=> import('../views/DetaIL.vue'),
    children:[{
      path:'detailedproduct/:orderId',
      component:() => import('../views/DetailedProduct.vue'),
    }],
  },
  {
    path: '/ShopCart',
    name: 'ShopCart',
    component: () => import('../views/ShopCart.vue'),
  },
  {
    path: '/RePair',
    name: 'RePair',
    component: () => import('../views/RePair.vue'),
  },
  {
    path: '/RePairdata',
    component: () => import('../views/RePairdata.vue'),
    children:[{
      path:'RePairdatacontant/:orderId',
      component: () => import('../views/RePairdatacontant.vue'),
    },{
      path:'RePairsure/:orderId',
      component: () => import('../views/RePairsure.vue'),
    },{
      path:'FinalSure/:orderId',
      component: () => import('../views/FinalSure.vue'),
    }]

  },
  {
    path:'/ShopView',
    component:() => import('../views/ShopView.vue'),
    children:[{
      path:'ShopStep2',
      component:()=> import('../views/ShopSetp2.vue'),
    },
  {
    path:'ShopStep3/:orderId',
      component:()=> import('../views/ShopStep3.vue'),
  },
  {
    path:'ShopStep33',
    component:()=> import('../views/ShopStep33.vue'),
  },
  {
    path:'ShopStep4/:orderId',
      component:()=> import('../views/ShopStep4.vue'),
  }]
  },
  {
    path: '/DunLoo',
    component: () => import('../views/DunLoo.vue')
  },
  {
    path: '/DunLoohuo',
    component: () => import('../views/DunLoohuo.vue'),
    children:[{
      path:'DunLooNeLong',
      component: () => import('../views/DunLooNeLong.vue'),
    },
    {
      path:'PaTh',
      component:() => import('../views/PaTh.vue'),
      children:[
        {
          path:'CarouselImg',
          components:{
            left:()=>import('../components/LeFt.vue'),
            right:()=>import('../components/CarouselImg.vue'),
          },
        },
        {
          path:'coupon',
          components:{
            left:()=>import('../components/LeFt.vue'),
            right:()=>import('../components/CouponNumber.vue'),
          },
        },
        {
          path:'order',
          components:{
            left:()=>import('../components/LeFt.vue'),
            right:()=>import('../components/OrderNum.vue'),
          },
        },
        {
          path:'repair',
          components:{
            left:()=>import('../components/LeFt.vue'),
            right:()=>import('../components/RepairNum.vue'),
          },
        }
      ]
    }
    ],
  },
  {
    path: '/DunSee',
    component: () => import('../views/DunSee.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
