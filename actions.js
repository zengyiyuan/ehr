/**
 * @file gobal actions
 * @author lixiaobin
 */
import {
    loginInfo,
    checkAvatarExist
} from '@/common/request'

export default {

    /**
    * 更新全局配置
    */
    updateGlobalConfig ({ commit, state }) {
        /**
         * 获取用户的基本信息
         */
        loginInfo()
            .then((res) => {
                commit('SET_USER_INFO', res.data)
            })
        checkAvatarExist()
            .then(res => {
                // code = 0 为正常
                // code = 2000000800 为异常需要上传头像
                commit('SET_USER_AVATAR_FLAG', false)
            }).catch(error => {
                commit('SET_USER_AVATAR_FLAG', true)
                setTimeout(() => {
                    window.location.href = '#/profile'
                }, 1200)
            })
    }
}
