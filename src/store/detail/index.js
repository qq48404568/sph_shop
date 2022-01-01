/*
 * @Description: 商品详情仓库
 * @Author: RyangXie
 * @Date: 2021-12-22 23:05:11
 * @LastEditTime: 2021-12-24 22:44:48
 * @LastEditors: RyangXie
 * @Reference:
 */

import { reqGoodsInfo, reqAddOrUpdateShopCart } from '@/api'
// 封装游客身份模块uuid
import {getUUID} from '@/utils/uuid_token'
const state = {
  goodInfo: {},
  // 游客临时身份
  uuid_token: getUUID()
}
const mutations = {
  GETGOODINFO (state, goodInfo) {
    state.goodInfo = goodInfo
  }
}
const actions = {
  // 获取产品信息
  async getGoodInfo ({ commit }, skuId) {
    const result = await reqGoodsInfo(skuId)
    if (result.code == 200) {
      commit('GETGOODINFO', result.data)
    }
  },
  // 将产品添加到购物车中
  async addOrUpdateShopCart ({ commit }, { skuId, skuNum }) {
    // 加入购物车以后（发请求），前台将参数发给服务器
    // 服务器写入数据库成功，并没有返回其他的数据
    // 因为服务器没有返回其余数据，因此咋们不需要三连环存储数据
    let result = await reqAddOrUpdateShopCart(skuId, skuNum)
    // 当前这个函数如果执行返回Promise
    console.log(result);
    if (result.code == 200) {
      return 'ok'
    } else {
      // 加入购物车失败
      return Promise.reject(new Error('fail'))
    }
  }
}
const getters = {
  categoryView (state) {
    return state.goodInfo.categoryView || {}
  },
  skuInfo (state) {
    return state.goodInfo.skuInfo || {}
  },
  spuSaleAttrList (state) {
    return state.goodInfo.spuSaleAttrList || []
  }
}

export default {
  state,
  mutations,
  actions,
  getters
}