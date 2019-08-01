<template>
    <div class="login">
        <div class="login-wrap">
            <div class="login-banner">
                <img class="people" src="./assets/img/people@2x.png">
                <img class="logo" src="./assets/img/logo@2x.png">
            </div>
            <div class="login-form">
                <div class="form-header">
                    <div class="brand-title"></div>
                </div>
                <div class="form-body">

                    <!-- 登录 -->
                    <el-form
                        v-show="mode === 'LOGIN'"
                        ref="loginForm"
                        :rules="loginRules"
                        :model="loginForm"
                        @keyup.enter.native="login">
                        <el-form-item prop="loginUserName">
                            <el-input
                                clearable
                                placeholder="请输入邮箱前缀"
                                v-model.trim="loginForm.loginUserName">
                                <icon slot="prefix" name="user" scale="1.8"></icon>
                            </el-input>
                        </el-form-item>
                        <el-form-item prop="password">
                            <el-input
                                clearable
                                auto-complete="off"
                                type="password"
                                placeholder="请输入密码"
                                v-model.trim="loginForm.password">
                                <icon slot="prefix" name="lock" scale="1.8"></icon>
                            </el-input>
                        </el-form-item>
                        <el-form-item prop="validateCode" v-if="needValidateCode">
                            <el-input
                                placeholder="请输入验证码"
                                v-model.trim="loginForm.validateCode"
                                @keypress="login">
                                <template slot="append">
                                    <img
                                        :src="validateImg"
                                        @click="changeValidateCode">
                                </template>
                            </el-input>
                        </el-form-item>
                    </el-form>

                    <!-- 验证身份 -->
                    <el-form
                        v-show="mode === 'VALIDATE'"
                        ref="validateForm"
                        :rules="validateRules"
                        :model="validateForm">
                        <el-form-item prop="validateUserName">
                            <el-input
                                clearable
                                placeholder="请输入邮箱前缀"
                                v-model.trim="validateForm.validateUserName">
                                <icon slot="prefix" name="user" scale="1.8"></icon>
                            </el-input>
                        </el-form-item>
                        <el-form-item prop="mobile">
                            <el-input
                                clearable
                                auto-complete="off"
                                :maxlength="11"
                                placeholder="请输入手机号"
                                v-model.trim="validateForm.mobile">
                                <icon slot="prefix" name="mobile" scale="1.8"></icon>
                            </el-input>
                        </el-form-item>
                        <el-form-item prop="idNo">
                            <el-input
                                clearable
                                placeholder="请输入证件号（身份证或其他登记证件号）"
                                v-model.trim="validateForm.idNo">
                            </el-input>
                        </el-form-item>
                    </el-form>

                    <!-- 验证身份 填写验证码 -->
                    <el-form
                        v-show="mode === 'VALIDATE_2'"
                        ref="validateForm2"
                        :rules="validateRules2"
                        :model="validateForm2">
                        <el-form-item prop="mobileCode">
                            <el-input
                                clearable
                                :maxlength="4"
                                auto-complete="off"
                                placeholder="请输入手机验证码"
                                v-model.trim="validateForm2.mobileCode">
                                <icon slot="prefix" name="mobile" scale="1.8"></icon>
                            </el-input>
                        </el-form-item>
                    </el-form>
                </div>

                <div class="form-footer">
                    <div v-if="mode === 'LOGIN'">
                        <el-button
                            :disabled="isDisabled"
                            class="login-button"
                            type="primary"
                            @click="login">
                                登录
                                <div v-if="isDisabled" class="login-button-spinner"><svg viewBox="25 25 50 50" class="circular"><circle cx="50" cy="50" r="20" fill="none" class="path"></circle></svg></div>
                        </el-button>
                        <div class="change-action">
                            <a
                                class="forget"
                                href="javascript:;"
                                @click="resetPassword">忘记密码？</a>
                        </div>
                    </div>
                    <div v-if="mode === 'VALIDATE'">
                        <el-button
                            class="validate-button"
                            type="primary"
                            @click="validateIdentity">验证身份</el-button>
                        <div class="change-action">
                            <a
                                class="back"
                                href="javascript:;"
                                @click="backToLogin">返回登录</a>
                        </div>
                    </div>
                    <div v-if="mode === 'VALIDATE_2'">
                        <el-button
                            class="validate-button"
                            type="primary"
                            @click="validateIdentity2">验证身份</el-button>
                    </div>
                </div>
                <div class="friendly-link">
                    <a href="https://download.huatu.com" target="_blank">
                        <icon name="phone" scale="1.5" style="color: #679AFA"></icon><span>OA客户端下载</span>
                    </a>
                </div>
            </div>
        </div>
        <img class="login-btmbg" src="./assets/img/hill@2x.png">

        <!-- 基本信息验证通过提示 -->
        <el-dialog
            title="提示"
            width="480px"
            :close-on-click-modal="false"
            :visible.sync="showDlgValidated">
            <div class="validated-message">
                <div class="title">基本信息验证通过！</div>
                <div class="content">
                    请注意查收手机短信验证码，如不能获取验证码，请发送邮件至<a href="mailto:ehr@huatu.com">ehr@huatu.com</a>
                </div>
                <div class="confirm-button">
                    <el-button
                        type="primary"
                        @click="next">下一步</el-button>
                </div>
            </div>
        </el-dialog>

        <!-- 密码重置成功提示 -->
        <el-dialog
            title="提示"
            width="480px"
            :close-on-click-modal="false"
            :visible.sync="showDlgReseted">
            <div class="successful-message">
                <icon name="success" scale="10"></icon>
                <div class="title">重置密码成功</div>
                <div class="content">新密码将会以短信形式发送至您的手机，请注意查收</div>
                <div class="back-button">
                    <el-button
                        type="primary"
                        @click="showDlgReseted = false">返回</el-button>
                </div>
            </div>
        </el-dialog>
    </div>
</template>

<script>
import { login, validateIdentity, reset } from '@/common/request'
import getUrlSearch from '@/common/function/getUrlSearch'
import loginConfig from '@/common/config/login'

export default {
    data () {
        return {
            mode: 'LOGIN',
            loginForm: {
                loginUserName: '',
                password: '',
                validateCode: ''
            },
            validateForm: {
                validateUserName: '',
                mobile: '',
                idNo: ''
            },
            validateForm2: {
                mobileCode: ''
            },
            validateImg: '',
            showDlgValidated: false,
            showDlgReseted: false,
            needValidateCode: false,
            isDisabled: false,
            ...loginConfig
        }

    },
    watch: {
        showDlgReseted (val) {
            if (!val) {
                location.reload()
            }
        }
    },
    mounted () {
        this.getValidateCode()
        let search = getUrlSearch()
        if (search && search.forget === '1') {
            this.resetPassword()
        }
    },
    methods: {
        /**
         * 获取验证码
         */
        getValidateCode () {
            this.validateImg = `/login/validateImg.json?t=${Date.now()}`
        },

        /**
         * 切换验证码
         */
        changeValidateCode () {
            this.getValidateCode()
        },

        /**
         * 登录
         */
        login () {
            this.$refs['loginForm'].validate(async (valid) => {
                if (valid) {
                    const EMAIL_PATTERN = /^[-\w\+]+(?:\.[-\w]+)*@[-a-z0-9]+(?:\.[a-z0-9]+)*(?:\.[a-z]{2,})$/i

                    let form = this.loginForm
                    let params = {
                        userName: EMAIL_PATTERN.test(form.loginUserName) ? form.loginUserName.split('@')[0] : form.loginUserName,
                        password: form.password
                    }
                    let validateCode = form.validateCode

                    if (validateCode) {
                        Object.assign(params, {
                            validateCode: validateCode
                        })
                    }
                    this.loading = true
                    this.isDisabled = true
                    login(params)
                        .then((res) => {
                            let search = getUrlSearch()
                            if (search.nextUrl) {
                                window.location.href = search.nextUrl
                                return
                            }
                            setTimeout(() => {
                                this.loading = false
                                this.isDisabled = false
                            })
                            window.location.href = '/main.html'
                        }, (res) => {
                            let code = res.code
                            if (code === 2000001001) {
                                this.getValidateCode()
                                this.needValidateCode = true
                            }
                            setTimeout(() => {
                                this.loading = false
                                this.isDisabled = false
                            })
                        })
                } else {
                    return false
                }
            })
        },

        /**
         * 重置密码
         */
        resetPassword () {
            this.mode = 'VALIDATE'
            this.validateForm.validateUserName = this.loginForm.loginUserName
            this.$refs['loginForm'].resetFields()
        },

        /**
         * 返回登录
         */
        backToLogin () {
            location.href = '/login.html'
            // this.mode = 'LOGIN';
            // this.$refs['validateForm'].resetFields();
        },

        /**
         * 验证身份
         */
        validateIdentity () {
            this.$refs['validateForm'].validate((valid) => {
                if (valid) {
                    const params = {
                        userName: this.validateForm.validateUserName,
                        mobile: this.validateForm.mobile,
                        idNo: this.validateForm.idNo
                    }
                    validateIdentity(params)
                        .then((res) => {
                            this.showDlgValidated = true
                        }, () => {})
                }
            })
        },

        validateIdentity2 () {
            this.$refs['validateForm2'].validate((valid) => {
                if (valid) {
                    console.log(valid)
                    const params = {
                        ...this.validateForm2
                    }
                    reset(params)
                        .then(() => {
                            this.showDlgReseted = true
                        }, () => {})
                }
            })
        },

        /**
         * 下一步
         */
        next () {
            this.showDlgValidated = false
            this.mode = 'VALIDATE_2'
            this.$refs['validateForm2'].resetFields()
        },

        /**
         * 下一步
         */
        back () {
            this.showDlgValidated = false
            this.showDlgReseted = true
        }
    }
}

</script>

<style lang="scss">
@import './assets/scss/login';
</style>
