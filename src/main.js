import Vue from 'vue'

import VueRouter from 'vue-router'
Vue.use(VueRouter)

import './lib/mui/css/mui.min.css'
import './lib/mui/css/icons-extra.css'

import MintUI from 'mint-ui'
Vue.use(MintUI)
import 'mint-ui/lib/style.css'


import app from './App.vue'
var vm = new Vue({
  el:'#app',
  render: c => c(app),
  router,
})