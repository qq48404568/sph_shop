/*
 * @Description: 
 * @Author: RyangXie
 * @Date: 2021-12-24 22:44:28
 * @LastEditTime: 2021-12-24 22:51:34
 * @LastEditors: RyangXie
 * @Reference: 
 */
import { v4 as uuidv4 } from 'uuid';
// 要生成一个随机的字符串，且每次执行不能发生变化，游客身份持久存储
export const getUUID = () => {
  // 先从本地存储获取uuid
  let uuid_token = localStorage.getItem('UUIDTOKEN')
  // 如果没有生成
  if (!uuid_token) {
    // 生成游客临时身份
    uuid_token = uuidv4()
    // 本地存储存储一次
    localStorage.setItem('UUIDTOKEN', uuid_token)
  }
  return uuid_token
}