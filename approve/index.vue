<template>
    <div class="approve-list">
        <!-- 审批tab -->
        <el-card
            v-if="$route.name !== 'ApproveDetail'"
            :style="{ marginTop: currentCategory == 0 || currentCategory == 1 ? '20px' : '90px' }">
            <el-tabs
                v-model="currentCategory"
                @tab-click="handleTabClick">
                <el-tab-pane
                    v-for="approveCategory in approveCategoryList"
                    :key="approveCategory.id"
                    :label="approveCategory.name"
                    :name="`${approveCategory.id}`">
                </el-tab-pane>
            </el-tabs>
            <router-view></router-view>
        </el-card>
        <router-view v-else></router-view>
    </div>
</template>

<script>
import {
    approveCategoryList,
    approveCategoryPropMaping
} from './config'
import { last } from 'lodash'

export default {
    data () {
        return {
            approveCategoryList,
            approveCategoryPropMaping,
            currentCategory: '0'
        }
    },
    watch: {
        '$route' (to, from) {
            let currentCategoryName = last(to.path.split('/'))
            this.currentCategory = approveCategoryPropMaping[currentCategoryName]
            console.log( this.currentCategory);
            
        }
    },
    mounted () {
        console.log(this.$route.name)
        let currentCategoryName = last(this.$route.path.split('/'))
        this.currentCategory = approveCategoryPropMaping[currentCategoryName]
    },
    methods: {
        handleTabClick (tabInstance) {
            let path
            let tabName = tabInstance.name
            for (const key in approveCategoryPropMaping) {
                if (approveCategoryPropMaping.hasOwnProperty(key)) {
                    if (tabName === approveCategoryPropMaping[key]) {
                        path = key
                    }
                }
            }
            
            this.$router.push(path)
            
        }
    }
}
</script>

<style lang="scss">
    @import './style.scss';
</style>
