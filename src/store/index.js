/*
 * @Description: 
 * @Author: RyangXie
 * @Date: 2021-12-11 00:20:45
 * @LastEditTime: 2021-12-28 16:40:12
 * @LastEditors: RyangXie
 * @Reference: 
 */
import Vue from 'vue'
import Vuex from 'vuex'
// 需要使用插件一次
Vue.use(Vuex)

// 引入小仓库
import home from './home'
import search from './search'
import detail from './detail'
import shopcart from './shopcart'
import user from './user'
import trade from './trade'

// 对外暴露Store类的一个实例
export default new Vuex.Store({
  modules: {
    home,
    search,
    detail,
    shopcart,
    user,
    trade
  }
})