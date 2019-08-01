<template>
    <el-dialog
        width="480px"
        v-loading="loading"
        title="修改初始密码"
        :show-close="false"
        :close-on-press-escape="false"
        :close-on-click-modal="false"
        :visible.sync="$store.state.showModPassState">
        <el-form
            label-position="left"
            label-width="86px"
            ref="form"
            :model="form"
            :rules="passRules">
            <el-form-item
                prop="password"
                label="初始密码">
                <el-input
                    type="password"
                    v-model="form.password"
                    placeholder="请输入初始密码"></el-input>
            </el-form-item>
            <el-form-item
                prop="newPassword"
                label="新密码">
                <el-input
                    type="password"
                    v-model="form.newPassword"
                    placeholder="请输入8位或以上字母+数字+特殊字符"></el-input>
            </el-form-item>
            <el-form-item
                prop="confirmPassword"
                label="确认密码">
                <el-input
                    type="password"
                    v-model="form.confirmPassword"
                    placeholder="请再次输入新密码"></el-input>
            </el-form-item>
        </el-form>
        <div
            slot="footer"
            class="dialog-footer">
            <el-button
                :disabled="loading"
                @click="ok"
                type="primary">保存</el-button>
        </div>
    </el-dialog>
</template>

<script>
import checkPasswordStrength from '@/common/function/checkPasswordStrength'
import config from '@/common/config/login';
import { changePass, logout } from '@/common/request'

export default {
    data () {
        const confirmPassValidator = (rule, value, callback) => {
            if (value !== this.form.newPassword) {
                callback(new Error('两次输入的密码不一致'))
            } else {
                callback()
            }
        }
        const combPatternValidator = (rule, value, callback) => {
            let strength = checkPasswordStrength(value)

            if (this.form.password === this.form.newPassword) {
                callback(new Error('新密码不能与旧密码相同'))
            } else if (strength < 4) {
                callback(new Error('密码必须由数字，大小写字母，特殊字符两两组合而成'))
            } else {
                let isContainSubstring = this.getSubtrings(this.userInfo.userName).some((item) => {
                    return value.includes(item)
                })
                if (isContainSubstring) {
                    callback(new Error('密码不能包含用户名中三个以上的连续字符'))
                } else {
                    callback()
                }
            }
        }
        return {
            loading: false,
            username: '',
            form: {
                password: '',
                newPassword: '',
                confirmPassword: ''
            },
            passRules: {
                password: [
                    {
                        required: true,
                        message: '请输入初始密码',
                        trigger: 'blur'
                    }
                ],
                newPassword: [
                    {
                        required: true,
                        message: '请输入8位或以上字母+数字+特殊字符'
                    },
                    {
                        min: 8,
                        message: '密码长度须在8位以上'
                    },
                    {
                        validator: combPatternValidator
                    }
                ],
                confirmPassword: [
                    {
                        required: true,
                        message: '请再次输入新密码'
                    },
                    {
                        validator: confirmPassValidator
                    }
                ]
            }
        }
    },
    computed: {
        userInfo () {
            return this.$store.state.userInfo
        }
    },
    methods: {
        ok () {
            this.$refs.form.validate((valid) => {
                if (valid) {
                    this.loading = true
                    changePass({
                        password: this.form.password,
                        newPassword: this.form.newPassword
                    }).then(({ data }) => {
                        toast('密码修改成功，请重新登录', 'success')
                        this.loading = false
                        this.$store.commit('HIDE_MOD_PASS')
                        this.logout()
                    }, () => {
                        this.loading = false
                    })
                }
            })
        },

        logout () {
            logout()
                .then(() => {
                    window.location.href = '/login.html'
                })
        },

        /**
         * 获取指定长度的所有子串
         */
        getSubtrings (str, length = 3) {
            let substrs = []
            for (let startIndex = 0; startIndex < str.length + 1; startIndex++) {
                for (let endIndex = startIndex + length; endIndex < str.length + 1; endIndex++) {
                    substrs.push(str.substring(startIndex, endIndex))
                }
            }
            return substrs
        }
    }
}
</script>
