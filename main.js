import 'babel-polyfill'
import Vue from 'vue'
import ElementUI from 'element-ui'
import Icon from 'vue-svg-icon/Icon.vue'
import toast from './common/function/toast'
import loadingBar from './common/components/loadingBar'
import VueImg from 'v-img'
import VueProgressiveImage from 'vue-progressive-image'
import App from './App'
import router from './router'
import store from './store'
import Pager from './common/components/Pager'
import auth from '@/common/plugin/auth'

import Raven from 'raven-js'
import RavenVue from 'raven-js/plugins/vue'


// 线上环境，将错误加到sentry系统
if (envStr === 'prod') {
    Raven
        .config('https://cdddb33dbe384509b69f256825f76ee6@sentry.huatu.com/114')
        .addPlugin(RavenVue, Vue)
        .install()
}


window.Vue = Vue
window.toast = toast

const vueImgConfig = {
    altAsTitle: false,
    sourceButton: false,
    thumbnails: false,
    openOn: 'click'
}
Vue.use(VueImg, vueImgConfig)
Vue.use(VueProgressiveImage)

router.beforeEach((to, from, next) => {
    let path = from.path
    if (path) {
        // 两个/之间的就是模块名称
        let moduleNames = /([^\/]+)/.exec(path)
        if (moduleNames && moduleNames[1]) {
            clearState(moduleNames[1])
        }
    }
    let toPath = to.path
    if (toPath == '/') {
        store.commit('SET_CRUMB_OPTIONS', [])
    } else {
        // 两个/之间的就是模块名称
        let moduleNames = /([^\/]+)/.exec(toPath)
        if (moduleNames && moduleNames[1]) {
            clearState(moduleNames[1])
        }
    }
    loadingBar.start()
    next()
})

router.afterEach(route => {
    loadingBar.finish()
})

/**
 * 路由变化时，把之前的弹窗状态都清掉
 */
function clearState (module) {
    let status = store.state[module]
    if (status) {
        for (let key in status) {
            let property = status[key]
            if (status.hasOwnProperty(key) && property
				&& typeof property === 'boolean') {
                status[key] = false
            }
        }
    }
}
Vue.component('icon', Icon)
Vue.component('Pager', Pager)

Vue.use(ElementUI, { size: 'small' })
Vue.use(auth)

import '@/common/filter/currency'
import '@/common/filter/formatDate'
import '@/common/filter/unitMoney'
import 'library/filters/week'

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    store,
    components: { App },
    template: '<App/>'
})
