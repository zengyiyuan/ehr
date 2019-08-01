<template>
    <section
        class="organization-filter">
        <el-input v-model="value[0]" class="hide-input"></el-input>
        <el-popover
            ref="popover"
            placement="bottom"
            v-if="!disabled"
            v-loading="loading"
            popper-class="organization-filter-popver"
            width="350"
            trigger="click">
            <el-input
                slot="reference"
                :class="{'has-value': name}"
                v-model="name"
                :placeholder="placeholder"
                :clearable="false"
                :style="{width: typeof width === 'number' ? (width + 'px') : '100%'}">
                <span slot="suffix">
                    <span class="el-input__suffix" @click.stop="clear">
                        <span class="el-input__suffix-inner"><i class="el-input__icon el-icon-circle-close"></i></span>
                    </span>
                </span>
            </el-input>
            <section class="organization-filter-layer">
                <section class="opt-group">
                    <el-button
                        type="default"
                        @click="cancel"
                        size="small">取消</el-button>
                    <el-button
                        type="primary"
                        @click="submit"
                        size="small">确定</el-button>
                </section>
                <section class="organization-list">
                    <node
                        ref="node"
                        @select="changeSelect"
                        @unselect="changeUnSelect"
                        v-for="(item, index) in datas"
                        :key="item.id"
                        :node="item">
                    </node>
                </section>
            </section>
        </el-popover>
        <el-input
            v-else
            :placeholder="placeholder"
            v-model="name"
            :disabled="disabled"></el-input>
    </section>
</template>

<script>

import deepClone from '../function/deepClone'
import { allNodes } from '../request'
import Node from './Node'

export default {
    props: {
        value: {
            default () {
                return []
            }
        },
        width: {},
        // 是否用所有的组织架构，不用allNodes，就用当前登录人所控制的节点
        useAllNodes: {
            default: false
        },
        // 组织架构是否可以多选，多用于列表查询
        multiple: {
            default: false
        },
        from: {
            default: ''
        },
        placeholder: {
            default: '请选择组织架构'
        },
        clearOnChange: {
            default: false,
        },
        disabled: {
            default: false
        }
    },
    computed: {
        userInfo () {
            return this.$store.state.userInfo
        }
    },
    mounted () {
        let userInfo = this.userInfo
        if (!this.value.length) {
            this.reset()
        }
        if (!userInfo.nodes) {
            return
        }
        if (!this.useAllNodes) {
            this.datas = deepClone(userInfo.nodes)
            this.setDefault()
        } else {
            this.fetchAllNode()
        }
    },
    data () {
        return {
            datas: [],
            loading: false,
            visiable: false,
            name: '',
            selected: []
        }
    },
    methods: {
        /**
         * 获取选择器显示的文本
         */
        getLable () {
            let selected = this.selected
            if (!selected.length) {
                return ''
            }
            if (!this.multiple) {
                return selected[0].name
            } else {
                return this.selected.map((item) => {
                    return item.name
                }).join(',')
            }
        },
        fetchAllNode () {
            this.loading = false
            allNodes()
                .then((res) => {
                    this.loading = false
                    this.datas = res.data
                    this.name = this.selected.name
                    this.setDefault()
                }, () => {
                    this.loading = false
                })
        },
        /**
         * 取消选择项
         */
        changeUnSelect (value) {
            this.selected.some((item, index) => {
                if (item.id === value.id) {
                    this.selected.splice(index, 1)
                    return true
                }
            })
        },
        /**
         * 勾选选择项
         */
        changeSelect (value) {
            if (!this.multiple) {
                this.selected = []
            }
            this.selected = this.selected.concat(deepClone(value))
        },
        /**
         * 移除选中节点的active状态
         *
         * @param {Object} node 节点信息
         */
        rmeoveActive (node) {
            this.$set(node, '$active', 0)
            if (node.children && node.children.length) {
                node.children.forEach((item) => {
                    this.rmeoveActive(item)
                })
            }
        },
        /**
         * 设置active expand
         *
         * @param {Object} node 节点信息
         * @param {number} id 选择的节点id
         * @param {Array<number>} 节点id数组
         */
        setActiveExpand (node, id, ids) {
            if (node.id === id) {
                this.$set(node, '$active', 1)
                this.selected = [].concat(deepClone(node))
                this.name = this.selected[0].name
                return true
            } else if (ids.indexOf(node.id) > -1) {
                this.$set(node, '$expand', 1)
            }
            if (node.children && node.children.length) {
                node.children.forEach((item) => {
                    this.setActiveExpand(item, id, ids)
                })
            }
        },
        /**
         * 清除选择的数据
         */
        clear () {
            this.reset()
            this.$emit('input', [])
            this.$emit('change', {
                from: this.from,
                currentLabels: [],
                value: []
            })
            this.datas.forEach((item) => {
                this.rmeoveActive(item)
            })
        },
        reset () {
            this.name = ''
            this.selected = []
        },
        /**
         * 回显已选择的id
         */
        setDefault () {
            if (!this.datas.length) {
                return
            }
            let value = this.value
            if (!this.value.length) {
                this.reset()
            }
            let id = value[value.length - 1]
            this.datas.forEach((node) => {
                this.setActiveExpand(node, id, value)
            })
        },
        /**
         * 取消
         */
        cancel () {
            this.$refs.popover.doClose()
        },
        /**
         * 获取选中的id
         */
        getSelectedId () {
            // 如果是多选，返回选择节点的ids
            if (this.multiple) {
                return this.selected.map((item) => {
                    return item.id
                })
            }
            // 如果是单选，返回单选节点的路径
            else {
                return this.selected[0].ids
            }
        },
        /**
         * 提交数据
         */
        submit () {
            let selected = this.selected
            if (!selected.length) {
                toast(this.placeholder)
                return
            }
            this.cancel()
            this.name = this.getLable()
            let selectId = this.getSelectedId()
            this.$emit('input', selectId)
            this.$emit('change', {
                from: this.from,
                currentLabels: selected[0].names,
                value: selectId
            })
            if (this.clearOnChange) {
                this.clear()
            }
        }
    },
    components: {
        Node
    },
    watch: {
        value () {
            this.setDefault()
        },
        userInfo (value) {
            setTimeout(() => {
                if (!this.useAllNodes) {
                    this.datas = deepClone(value.nodes)
                    this.setDefault()
                }

            })
        }
    }
}
</script>

<style lang="scss">
    .organization-filter {
        .hide-input {
            position: absolute;
            right: 99999px;
            z-index: -1;
        }
        .el-input__icon {
            display: none;
        }
        .has-value {
            &:hover {
                .el-input__icon {
                    display: block;
                    cursor: pointer;
                    &:hover {
                        color: #909399;
                    }
                }
            }
        }
        .el-input__validateIcon {
            display: none!important;
        }

        &-layer {
            .organization-list {
                padding: 10px;
                height: 280px;
                overflow: auto;
            }
            .opt-group {
                border-bottom: 1px solid #efefef;
                padding: 10px;
                text-align: right;
            }
            li {
                list-style: none;
            }
        }
    }
</style>
