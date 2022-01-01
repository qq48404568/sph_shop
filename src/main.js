import Vue from 'vue'
import App from './App.vue'
// 三级联动组件---全局组件
import TypeNav from '@/components/TypeNav'
import Carsousel from '@/components/Carsousel'
import Pagination from '@/components/Pagination'
import { Button, MessageBox } from 'element-ui'
// 第一个参数：全局组件的名字 第二个参数：哪一个组件
Vue.component(TypeNav.name, TypeNav)
Vue.component(Carsousel.name, Carsousel)
Vue.component(Pagination.name, Pagination)
Vue.use(Button)
Vue.prototype.$msgbox = MessageBox;
Vue.prototype.$alert = MessageBox.alert;
// 引入路由 
import router from '@/routes'
// 引入仓库
import store from '@/store/index';
Vue.config.productionTip = false

// 引入MockServe.js 
import '@/mock/mockServe'
// 引入swiper样式
import 'swiper/css/swiper.min.css'
// 统一接口api文件夹里面全部请求函数
import * as API from '@/api'
console.log(API);
import VueLazyload from 'vue-lazyload'
import atm from '@/assets/images/1.gif'
Vue.use(VueLazyload, {
  // 懒加载默认的图片
  loading: atm,
})

// 引入自定义插件
import myPlugins from '@/plugins/myPlugins'
Vue.use(myPlugins,{
  name:'upper'
})

// 引入表单校验插件
import '@/plugins/validate'

new Vue({
  render: h => h(App),
  // 全局事件总线$bus配置
  beforeCreate () {
    Vue.prototype.$bus = this
    Vue.prototype.$API = API
  },
  // 注册路由
  router,
  // 注册仓库：组件实例的身上会多一个属性$store属性
  store
}).$mount('#app')
