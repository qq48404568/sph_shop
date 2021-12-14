/*
 * @Description: 
 * @Author: RyangXie
 * @Date: 2021-12-10 16:56:37
 * @LastEditTime: 2021-12-13 23:22:25
 * @LastEditors: RyangXie
 * @Reference: 
 */
// 当前这个模块：API进行统一管理
import requests from './request'
import mockRequests from './mockAjax'

// 三级联动接口
export const reqCategoryList = () => requests({ url: '/product/getBaseCategoryList', methods: 'get' })
// 获取banner接口
export const reqGetBannerList = () => mockRequests.get('/banner')
// 获取floor数据
export const reqFloorList = () => mockRequests.get('floor')