/*
 * @Description: search模块 
 * @Author: RyangXie
 * @Date: 2021-12-11 18:48:25
 * @LastEditTime: 2021-12-14 20:35:04
 * @LastEditors: RyangXie
 * @Reference: 
 */
import { reqGetSearchInfo } from "@/api"
const state = {
  //仓库初始状态
  searchList: {}
};
const mutations = {
  GETSEARCHLIST (state, searchList) {
    state.searchList = searchList;
  },
};
const actions = {
  //获取search模块数据
  async getSearchList ({ commit }, params = {}) {
    //当前这个reqGetSearchInfo这个函数在调用获取服务器数据的时候，至少传递一个参数（空对象）
    //params形参：是当用户派发action的时候，第二个参数传递过来的，至少是一个空对象
    let result = await reqGetSearchInfo(params);
    if (result.code == 200) {
      commit("GETSEARCHLIST", result.data);
    }
  },
};
// 计算属性：在项目当中，为了简化数据而生。
const getters = {
  goodsList (state) {
    return state.searchList.goodsList || []
  },
  trademarkList (state) {
    return state.searchList.trademarkList || []
  },
  attrsList(state){
    return state.searchList.attrsList || []
  }
}

export default {
  state,
  mutations,
  actions,
  getters
}
