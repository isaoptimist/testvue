import Vue from 'vue'

import './assets/mui/css/mui.min.css'
import './assets/mui/css/icons-extra.css'


import MintUI from 'mint-ui'


import './scss/App.scss'
Vue.use(MintUI)
import 'mint-ui/lib/style.css'


import router from './router/index.js'


import app from './App.vue'
var vm = new Vue({
  el:'#app',
  render: c => c(app),
  router,
})