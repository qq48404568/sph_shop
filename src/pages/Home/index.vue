<!--
 * @Description: 
 * @Author: RyangXie
 * @Date: 2021-12-09 12:11:29
 * @LastEditTime: 2021-12-13 23:50:51
 * @LastEditors: RyangXie
 * @Reference: 
-->
<template>
  <div>
    <!-- 三级联动全局组件：三级联动已经注册为全局组件 -->
    <TypeNav />
    <listContainer />
    <Recommend />
    <Rank />
    <Like />
    <Floor v-for="(floor,index) in floorlist"
           :key="floor.id"
           :list="floor"/>
    <Brand />
  </div>
</template>

<script>
import listContainer from '@/pages/Home/listContainer'
import Recommend from '@/pages/Home/Recommend'
import Rank from '@/pages/Home/Rank'
import Like from '@/pages/Home/Like'
import Floor from '@/pages/Home/Floor'
import Brand from '@/pages/Home/Brand'
import { mapState } from 'vuex'

export default {
  components: {
    listContainer,
    Recommend,
    Rank,
    Like,
    Floor,
    Brand
  },
  mounted () {
    this.$store.dispatch('getFloorList')
  },
  computed: {
    ...mapState({
      floorlist: (state) => state.home.floorlist
    })
  }
}
</script>

<style>
</style>