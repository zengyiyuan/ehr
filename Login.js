/**
 * @file 登录页
 */
import 'babel-polyfill'
import Vue from 'vue'
import ElementUI from 'element-ui'
import Icon from 'vue-svg-icon/Icon.vue'
import toast from './common/function/toast'
import Login from './Login.vue'

window.Vue = Vue
window.toast = toast

Vue.component('icon', Icon)
Vue.use(ElementUI)

/* eslint-disable no-new */
new Vue({
    el: '#app',
    template: '<Login/>',
    components: { Login }
})
