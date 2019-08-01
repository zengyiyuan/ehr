<!--
  @file ehr顶导
-->

<template>
    <header class="clearfix">
        <div class="pull-left logo">
            <img src="../../assets/img/home_logo@2x.png">
        </div>
        <ul>
            <li class="user">
                <el-dropdown trigger="click" v-if="userInfo.roles && userInfo.roles.length > 1">
                    <span class="name pointer">
                        {{ userInfo.name }}
                        <span v-if="userInfo.curRole && userInfo.curRole.roleName">({{userInfo.curRole.roleName}}<span v-if="userInfo.belongNodeName">-{{userInfo.belongNodeName}}</span>)</span>
                        <i class="el-icon-arrow-down el-icon--right"></i>
                    </span>
                    <el-dropdown-menu slot="dropdown">
                        <el-dropdown-item
                            v-for="item in userInfo.roles"
                            :key="item.roleId"
                            :class="{'active': userInfo.curRole.roleId == item.roleId}"
                            @click.native="changeRole(item)">{{item.roleName}}</el-dropdown-item>
                    </el-dropdown-menu>
                </el-dropdown>
                <span
                    v-else
                    class="name">{{userInfo.name}}</span>
                ，欢迎您!
                <a href="https://download.huatu.com" target="_blank">
                    <icon name="phone" scale="1.5" style="color: #fff"></icon><span>OA客户端下载</span>
                </a>
                <span class="pointer exit" @click="logout">
                    <icon name="exit" scale="1.8"></icon>
                    <span>退出</span>
                </span>
            </li>
            <!-- <li class="role">
            <img :src="orgInfo.avatar|compressImage(30, 30)">
            <dropdown>
              <span class="name" slot="text">{{ orgInfo.username }}</span>
              <ul slot="action">
                <li @click="logout" >退出登录</li>
              </ul>
            </dropdown>
          </li> -->
        </ul>
    </header>
</template>

<script>
// import Dropdown from './Dropdown.vue';
import {
    logout,
    changeRole
} from '@/common/request'
export default {
    data() {
        return {
            scrollX: document.documentElement.scrollLeft || document.body.scrollLeft,
            scrollY: 0
        }
    },
    computed: {
        userInfo() {
            return this.$store.state.userInfo || {}
        }
    },
    components: {
        // Dropdown
    },
    methods: {
        /**
         * 切换
         */
        switchType(type) {
            if (this.$store.commit) {
                this.$store.commit('OPEN_SWITCH', type)
            } else {
                this.$store.dispatch('OPEN_SWITCH', type)
            }
        },
        /**
         * 切换角色
         */
        changeRole (item) {
            changeRole({
                roleId: item.roleId
            }).then((res) => {
                location.href = '/main.html'
            })
        },
        /**
         * 退出登录
         */
        logout() {
            logout()
                .then(() => {
                    window.location.href = '/login.html'
                })
        }
    }
}
</script>

<style lang="scss">
    header {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        height: 60px;
        line-height: 60px;
        text-align: right;
        z-index: 9;
        background-color: #679AFA;
        .logo {
            font-size: 24px;
            padding: 14px 20px;
            img {
                display: block;
                width: 133px;
                height: auto;
            }
        }
        .user {
            color: #FFF;
            padding-right: 30px;
            > a {
                color: #fff;
                margin-left: 10px;
                span,
                .svg-icon {
                    vertical-align: middle;
                    display: inline-block;
                    margin-right: 2px;
                }
            }
            .name {
                display: inline-block;
                color: #fff;
                line-height: 100%;
            }
            .exit {
                margin-left: 49px;
                .svg-icon,
                span {
                    display: inline-block;
                    vertical-align: middle;
                }
            }
        }
    }
</style>
