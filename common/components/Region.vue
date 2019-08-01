<template>
<div>
    <el-cascader
        :disabled="disabled"
        :options="options"
        :placeholder="placeholder"
        :clearable="clearable"
        :class="{'has-origin': this.value}"
        :show-all-levels="showAllLevels"
        @change="change"
        @active-item-change="handleItemChange"
        :props="props"
        v-model="defaultValue"
        :style="{width: typeof width === 'number' ? (width + 'px') : '100%'}"
    ></el-cascader>
</div>
</template>

<script>

import { areaSearch } from '../request'

export default {
    props: {
        width: {
        },
        clearable: {
            default: true
        },
        disabled: {
            default: false
        },
        placeholder: {
            default: '请选择城市'
        },
        showAllLevels: {
            default: true
        },
        value: {

        }
    },
    data () {
        return {
            defaultValue: this.value,
            options: [],
            props: {
                label: 'name',
                value: 'id',
                children: 'children'
            }
        }
    },
    watch: {
        value (val) {
            this.defaultValue = val
        }
    },
    created () {
        this.areaSearch()
    },
    methods: {
        /**
         * 搜索地域数据
         */
        areaSearch (id) {
            let params = {}
            if (id) {
                Object.assign(params, {
                    id
                })
            }
            areaSearch(params)
                .then((res) => {
                    let data = res.data
                    data.forEach((item) => {
                        item.children = []
                    })
                    this.options = data
                })
        },
        /**
         * 要据省份id获取省份index
         */
        getLevelItemIndexById (id) {
            let result = null
            this.options
                .some((item, index) => {
                    if (item.id === id) {
                        result = index
                        return true
                    }
                })
            return result
        },
        /**
         * 要据省份id获取省份item
         */
        getLevelItemById (id) {
            let result = null
            this.options
                .some((item, index) => {
                    if (item.id === id) {
                        result = item
                        return true
                    }
                })
            return result
        },
        /**
         * 省份信息发生改变，填空children
         */
        handleItemChange (val) {
            let item = this.getLevelItemById(val[0])
            if (!item || item.children.length) {
                return
            }
            areaSearch({
                id: val[0]
            })
                .then((res) => {
                    let index = this.getLevelItemIndexById(val[0])
                    this.options[index].children = res.data
                })

        },
        /**
         * 选择城市
         */
        change (value) {
            this.$emit('input', value)
            this.$emit('change', value)
        }
    }
}
</script>

<style lang="scss">
    .has-origin {
        input::-webkit-input-placeholder {
            color: #c0c4cc !important;
        }
    }
</style>
