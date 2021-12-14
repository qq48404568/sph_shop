/*
 * @Description:
 * @Author: RyangXie
 * @Date: 2021-12-09 12:12:57
 * @LastEditTime: 2021-12-13 12:40:46
 * @LastEditors: RyangXie
 * @Reference:
 */
// 配置路由
import Vue from 'vue'
import VueRouter from 'vue-router'

// 使用插件
Vue.use(VueRouter)

// 引入路由组件
import Home from '@/pages/Home'
import Search from '@/pages/Search'
import Login from '@/pages/Login'
import Register from '@/pages/Register'
// 先把VueRouter原型对象的push，先保存一份
let originPush = VueRouter.prototype.push
let originReplace = VueRouter.prototype.replace

// 重写push | replace
// 第一个参数：告诉原来push方法，你往哪里转跳（传递哪些参数）
VueRouter.prototype.push = function (location, resolve, reject) {
  if (resolve && reject) {
    // call || apply 区别：相同点，都可以篡改函数的上下文一次
    // 不同点：call与apply传递参数：call传递参数用逗号隔开，apply方法执行，传递数组
    originPush.call(this, location, resolve, reject)
  } else {
    originPush.call(this, location, () => { }, () => { })
  }
}

VueRouter.prototype.push = function (location, resolve, reject) {
  if (resolve && reject) {
    // call || apply 区别：相同点，都可以篡改函数的上下文一次
    // 不同点：call与apply传递参数：call传递参数用逗号隔开，apply方法执行，传递数组
    originReplace.call(this, location, resolve, reject)
  } else {
    originReplace.call(this, location, () => { }, () => { })
  }
}

export default new VueRouter({
  // 配置路由
  routes: [
    // 重定向
    {
      path: '/',
      redirect: "/home"
    },
    {
      path: '/home',
      component: Home,
      meta: { show: true }
    },
    {
      path: '/search/:keyword?',
      component: Search,
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
  ]
})

