export default {
    'SET_USER_INFO' (state, userInfo) {
        state.userInfo = userInfo
    },
    'SHOW_SET_HEADER' (state) {
        state.showSetHeaderState = true
    },
    'SET_USER_AVATAR_FLAG' (state, avatarFlag) {
        state.avatarFlag = avatarFlag
    },
    'HIDE_SET_HEADER' (state) {
        state.showSetHeaderState = false
    },
    'SHOW_MOD_PASS' (state) {
        state.showModPassState = true
    },
    'HIDE_MOD_PASS' (state) {
        state.showModPassState = false
    }
}
