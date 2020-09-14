import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import Source from '@/utils/source'
import 'normalize.css/normalize.css' //样式初始化
import '@/styles/index.scss' //引入全局样式
import 'amfe-flexible' // vue使用rem
import { Toast } from 'vant';


Vue.config.productionTip = false
Vue.prototype.$axios= axios;
Vue.prototype.$toast = Toast
Vue.prototype.$source = Source

Vue.use(Toast);
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
