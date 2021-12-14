/*
 * @Description: 
 * @Author: RyangXie
 * @Date: 2021-12-11 00:20:45
 * @LastEditTime: 2021-12-11 18:50:30
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

// 对外暴露Store类的一个实例
export default new Vuex.Store({
  modules:{
    home,
    search
  }
})