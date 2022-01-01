/*
 * @Description: 
 * @Author: RyangXie
 * @Date: 2021-12-27 22:23:57
 * @LastEditTime: 2021-12-28 12:07:57
 * @LastEditors: RyangXie
 * @Reference: 
 */

// 存储token
export const setToken = (token) => {
  localStorage.setItem('TOKEN', token)
}

// 获取token
export const getToken = () => {
  return localStorage.getItem('TOKEN')
}

// 清除本地存储的token
export const removeToken = () => {
  localStorage.removeItem('TOKEN')
}