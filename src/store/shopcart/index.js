/*
 * @Description: 
 * @Author: RyangXie
 * @Date: 2021-12-24 22:21:30
 * @LastEditTime: 2021-12-26 21:24:34
 * @LastEditors: RyangXie
 * @Reference: 
 */
import { reqCartList, reqDeleteCartById, reqUpdateCheckedById } from '@/api'
const state = {
  cartlist: []
}
const mutations = {
  GETCARTLIST (state, cartlist) {
    state.cartlist = cartlist
  }
}
const actions = {
  // 获取购物车列表数据
  async getCartList ({ commit }) {
    const result = await reqCartList()
    // console.log(result);
    if (result.code == 200) {
      commit('GETCARTLIST', result.data)
    }
  },
  // 删除购物车某一个产品
  async deleteCartListById ({ commit }, skuId) {
    let result = await reqDeleteCartById(skuId)
    console.log(result);
    if (result.code == 200) {
      return 'ok'
    } else {
      return Promise.reject(new Error('faile'))
    }
  },
  // 修改购物车某一个产品的选中状态
  async deleteCartListBySkuId ({ commit }, { skuId, isChecked }) {
    let result = await reqUpdateCheckedById(skuId, isChecked)
    if (result.code == 200) {
      return 'ok'
    } else {
      return Promise.reject(new Error('faile'))
    }
  },
  // 删除全部勾选的产品
  deleteAllCheckedCart ({ dispatch, getters }) {
    //context:小仓库，commit【提交mutations修改state】 getters【计算属性】 dispatch【派发action】 state【当前仓库数据】
    //获取购物车中全部的产品（是一个数组）
    let PromiseAll = []
    console.log(getters.cartlist.cartInfoList);
    getters.cartlist.cartInfoList.forEach(item => {
      let Promise = item.isChecked == 1 ? dispatch('deleteCartListById', item.skuId) : ''
      //将每一次返回的Promise添加到数组当中
      PromiseAll.push(Promise)
    })
    //只要全部的p1|p2....都成功，返回结果即为成功
    //如果有一个失败，返回即为失败结果
    return Promise.all(PromiseAll)
  },
  // 修改全部产品的状态
  updateAllCartIsChecked ({ dispatch, state }, isChecked) {
    // console.log(state);
    // console.log(isChecked);
    let promiseAll = []
    state.cartlist[0].cartInfoList.forEach(item => {
      let promise = dispatch('deleteCartListBySkuId', {
        skuId: item.skuId,
        isChecked
      })
      promiseAll.push(promise)
    })
    return Promise.all(promiseAll)
  }
}
const getters = {
  cartlist (state) {
    return state.cartlist[0] || {}
  },
}

export default {
  state,
  mutations,
  actions,
  getters
}