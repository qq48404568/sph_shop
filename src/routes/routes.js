/*
 * @Description: 
 * @Author: RyangXie
 * @Date: 2021-12-22 22:52:44
 * @LastEditTime: 2021-12-31 20:24:34
 * @LastEditors: RyangXie
 * @Reference: 
 */
// 引入路由组件
// import Home from '@/pages/Home'
// import Search from '@/pages/Search'
import Login from '@/pages/Login'
import Register from '@/pages/Register'
import Detail from '@/pages/Detail'
import AddCartSuccess from '@/pages/AddCartSuccess'
import ShopCart from '@/pages/ShopCart'
import Trade from '@/pages/Trade'
import Pay from '@/pages/Pay'
import PaySuccess from '@/pages/PaySuccess'
import Center from '@/pages/Center'
// 引入二级路由
import MyOrder from '@/pages/Center/myOrder'
import GroupOrder from '@/pages/Center/groupOrder'

export default [
  // 重定向
  {
    path: '/',
    redirect: "/home"
  },
  {
    path: '/home',
    component: () => import('@/pages/Home'),
    meta: { show: true }
  },
  {
    path: '/search/:keyword?',
    component: () => import('@/pages/Search'),
    meta: { show: true },
    name: 'search'
  },
  {
    path: '/login',
    component: Login,
    meta: { show: false }
  },
  {
    path: '/register',
    component: Register,
    meta: { show: false }
  },
  {
    path: '/detail/:skuid',
    component: Detail,
    meta: { show: true }
  },
  {
    path: '/addcartsuccess',
    name: 'addcartsuccess',
    component: AddCartSuccess,
    meta: { show: true }
  },
  {
    path: '/shopCart',
    component: ShopCart,
    meta: { show: true }
  },
  {
    path: '/trade',
    component: Trade,
    meta: { show: true },
    // 路由独享守卫
    beforeEnter: (to, from, next) => {
      // 去交易页面。必须是从购物车而来
      if (from.path == '/shopCart') {
        next()
      } else {
        next(false)
      }
    }
  },
  {
    path: '/pay',
    component: Pay,
    meta: { show: true },
    beforeEnter: (to, from, next) => {
      if (from.path == '/trade') {
        next()
      } else {
        next(false)
      }
    }
  },
  {
    path: '/paysuccess',
    component: PaySuccess,
    meta: { show: true }
  },
  {
    path: '/center',
    component: Center,
    meta: { show: true },
    children: [
      {
        path: 'myorder',
        component: MyOrder
      },
      {
        path: 'grouporder',
        component: GroupOrder
      },
      {
        path: '/center',
        redirect: '/center/myorder'
      }
    ]
  },
]