<template>
    <el-scrollbar class="sidebar">
        <el-menu
            :default-active="getFirstPath($route.path)"
            unique-opened
            router>
            <template
                v-for="(link, index) in links"
                v-if="!link.hide && link.path">
                <el-submenu
                    v-if="link.children && link.children.length && isVisible(link.children) "
                    :key="link.path"
                    :index="link.path">
                    <template v-if="link.empty"
                        slot="title"
                        class="submenu-title">
                        <icon :name="link.icon" scale="1.6"></icon>&nbsp;
                        <span v-text="link.title"></span>
                    </template>

                    <el-menu-item
                        v-else
                        slot="title"
                        class="submenu-title"
                        :index="link.path">
                        <icon :name="link.icon" scale="1.6"></icon>&nbsp;
                        <span v-text="link.title"></span>
                    </el-menu-item>

                    <el-menu-item
                        v-for="(childLink, childIndex) in link.children"
                        v-if="!childLink.hide && childLink.path &&  hasAuth(childLink.name, childLink.auth)"
                        :key="childLink.path"
                        :index="childLink.path">
                        <i :class="childLink.icon"></i>
                        <span v-text="childLink.title"></span>
                    </el-menu-item>
                </el-submenu>

                <el-menu-item
                    v-if="(!(!link.hide && link.path) || !link.empty) && isSubordinateShow(link)"
                    :key="link.path"
                    :index="link.path">
                    <icon :name="link.icon" scale="1.6"></icon>&nbsp;
                    <span v-text="link.title"></span>
                </el-menu-item>
            </template>
        </el-menu>
    </el-scrollbar>
</template>

<script>
import { Menu, Submenu, MenuItem, MenuItemGroup } from 'element-ui';
import Icon from 'vue-svg-icon/Icon.vue';
import { links } from '../config/menu'
import auths from '../config/auth'

export default {
    name: 'SideBar',
    components: {
        Menu,
        Submenu,
        MenuItem,
        MenuItemGroup,
        Icon
    },
    data () {
        return {
            links
        }
    },
    computed: {
        userInfo () {
            return this.$store.state.userInfo
        }
    },
    methods: {
        getFirstPath (path) {
            return `/${path.split('/')[1]}`;
        },
        isVisible (links) {
            const arr = links.map((link) => {
                    return {
                    name: link.name,
                    auth: link.auth
                    }
                
            });
            // console.log(arr);
            
            return this.ownAuth(arr);
        },
        // 控制一级菜单中不受权限控制的菜单，下属信息根据 userInfo.underlingCount 来控制
        isSubordinateShow (link) {
            let flag = true
            if (link.path === '/subordinates' && !this.userInfo.underlingCount ) {
                flag = false
            }
            return flag
        }
    }
}
</script>
