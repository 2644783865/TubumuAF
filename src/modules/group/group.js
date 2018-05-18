import Vue from 'vue'
import HttpClient from '@/utils/httpclient.js'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import '../../styles/inner.scss'

import App from './App.vue'
// 仅引入用到的图标
import 'vue-awesome/icons/users'
import 'vue-awesome/icons/user-times'
// 一次引入全部图标
// import 'vue-awesome/icons'
import Icon from 'vue-awesome/components/Icon'

Vue.config.productionTip = false

Vue.use(HttpClient)
Vue.use(ElementUI)

Vue.component('icon', Icon)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App)
})
