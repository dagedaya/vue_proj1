import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// 引入 ElementUI
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);//安装插件

// 引入axios
import axios from 'axios'
import VueAxios from 'vue-axios'
Vue.use(VueAxios, axios)
// Vue.prototype_axios=axios

// 引入jquery
import $ from 'jquery'
Vue.config.$ = $    

Vue.config.productionTip = false //阻止启动生产消息

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
