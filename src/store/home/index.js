/*
 * @Description: 
 * @Author: RyangXie
 * @Date: 2021-12-11 18:48:31
 * @LastEditTime: 2021-12-13 23:27:36
 * @LastEditors: RyangXie
 * @Reference: 
 */
import { reqCategoryList, reqGetBannerList, reqFloorList } from '@/api'
const state = {
  // home仓库中存储三级菜单的数据
  categoryList: [],
  // 轮播图的数据
  bannerList: [],
  // 楼层
  floorlist: []
}
const mutations = {
  CATEGORYLIST (state, categoryList) {
    state.categoryList = categoryList
  },
  GETBANNERLIST (state, bannerList) {
    state.bannerList = bannerList
  },
  GRTFLOORLIST (state, floorlist) {
    state.floorlist = floorlist
  }
}
const actions = {
  // 通过API里面的接口函数调用，向服务器发请求，获取服务器的数据
  async categoryList ({ commit }) {
    let result = await reqCategoryList()
    console.log(result);
    if (result.code == 200) {
      commit('CATEGORYLIST', result.data)
    }
  },
  async getBannerList ({ commit }) {
    const result = await reqGetBannerList()
    console.log(result);
    if (result.code == 200) {
      commit('GETBANNERLIST', result.data)
    }
  },
  async getFloorList ({ commit }) {
    let result = await reqFloorList()
    if (result.code == 200) {
      commit('GRTFLOORLIST', result.data)
    }
  }
}
const getters = {}

export default {
  state,
  mutations,
  actions,
  getters
}