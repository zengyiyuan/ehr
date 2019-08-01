<template>
    <div class="top-nav clearfix">
        <div
            class="nav-link"
            v-if="goback"
            @click="back">
            <i class="el-icon-arrow-left"></i>
            <slot name="title"></slot>
        </div>
        <slot name="operate"></slot>
    </div>
</template>

<script>
export default {
    props: {
        goback: {
            type: Boolean,
            default: true,
            required: false
        },
        to: {
            type: String,
            default: ''
        }
    },
    methods: {
        back () {
            let route = this.to
            if (route) {
                this.$router.push(route)
            } else {
                history.go(-1)
            }
        }
    }
}
</script>

<style lang="scss">
    .top-nav {
        position: fixed;
        z-index: 9;
        left: 180px;
        top: 60px;
        padding: 0 30px;
        width: calc(100% - 180px);
        height: 70px;
        line-height: 70px;
        border: 1px solid #EAEBED;
        background-color: #FEFEFE;
        box-sizing: border-box;
        .nav-link {
            float: left;
            font-size: 20px;
            color: #679AFA;
            cursor: pointer;
        }
        .nav-operate {
            padding-right: 20px;
            float: right;
            .el-button + .el-button,
            .el-button + .el-dropdown {
                margin-left: 10px;
            }
        }
    }
</style>

