<template>

    <el-dialog
        title="设置自定义字段"
        width="705px"
        custom-class="set-header-dialog"
        :visible.sync="$store.state.showSetHeaderState"
        v-loading.fullscreen.lock="fullscreenLoading">
        <el-row>
            <el-col :span="10">
                <div class="hide-fields fields-list">
                    <h3>隐藏字段</h3>
                    <ul>
                        <li
                            v-for="item in hiddenFields"
                            :key="item.name"
                            :class="{active: item.$selected, lock: item.lock}"
                            @click="select(item)"
                        >{{ item.desc }}</li>
                        <p v-if="!hiddenFields.length">没有隐藏字段</p>
                    </ul>
                </div>
            </el-col>
            <el-col :span="2">
                <div class="opt-move">
                    <span
                        class="el-icon-arrow-left"
                        :class="{light: hasShowFieldsSelected && showFields.length>1}"
                        title="移动到隐藏字段"
                        @click="moveToHide"
                    ></span>
                    <span
                        class="el-icon-arrow-right"
                        :class="{light: hasHiddenFieldsSelected}"
                        title="移动到显示字段"
                        @click="moveToShow"
                    ></span>
                </div>
            </el-col>
            <el-col :span="10">
                <div class="show-fields fields-list">
                    <h3>显示字段</h3>
                    <ul>
                        <li
                            v-for="item in showFields"
                            :key="item.name"
                            :class="{active: item.$selected, lock: item.lock}"
                            @click="select(item)"
                            :disabled="showFields.length<2"
                        >{{ item.desc }}</li>
                        <p v-if="!showFields.length">没有显示字段</p>
                    </ul>
                </div>
            </el-col>
            <el-col :span="2">
                <div class="opt-sort">
                    <span
                        :class="{light: canMoveUp}"
                        @click="moveUp"
                        title="向上移动"
                    >
                        <span class="el-icon-arrow-up"></span>
                    </span>
                    <span
                        :class="{light: canMoveDown}"
                        @click="moveDown"
                        title="向下移动"
                    >
                        <span class="el-icon-arrow-down"></span>
                    </span>
                </div>
            </el-col>
        </el-row>
        <span slot="footer" class="dialog-footer">
            <el-button @click="cancel">取消</el-button>
            <el-button
                type="primary"
                :disabled="isDisabled"
                @click="save">保存</el-button>
        </span>
    </el-dialog>
</template>

<script>
import { getHeaderConfig, setHeaderConfig }  from '../request'

export default {
    props: {
        displayType: {
            type: Number,
            default: 0
        }
    },
    data () {
        return {
            fields: [],
            isDisabled: false,
            getTime: null,
            fullscreenLoading: false
        }
    },
    computed: {
        canMoveUp () {
            let result = false
            let index = -1
            let showFields = this.showFields
            let length = showFields.length

            while (length--) {
                if (showFields[length].$selected) {
                    index = length
                    break
                }
            }

            if (index == -1 || !index) {
                return false
            }

            for (let i = index - 1; i >= 0; i--) {
                let item = showFields[i]
                if (!item.hidden && !item.lock) {
                    result = true
                    break
                }
            }
            return result
        },
        canMoveDown () {
            let result = false
            let index = -1
            let showFields = this.showFields
            let length = showFields.length

            while (length--) {
                if (showFields[length].$selected) {
                    index = length
                    break
                }
            }

            return index >= 0 && index < showFields.length - 1
        },
        hiddenFields () {
            let result = []
            this.fields.forEach((item) => {
                if (!item.$using && !item.hidden) {
                    result.push(item)
                }
            })
            return result
        },
        hasHiddenFieldsSelected () {
            return this.hiddenFields.some((item) => {
                return item.$selected
            })
        },
        hasShowFieldsSelected () {
            return this.showFields.some((item) => {
                return item.$selected
            })
        },
        showFields () {
            let result = []

            this.fields.forEach((item) => {
                if (item.$using && !item.hidden) {
                    result.push(item)
                }
            })
            return result
        }
    },
    methods: {
        /**
             * 选择字段
             */
        select (item) {
            // 锁定的不能操作
            console.log(item)
            if (item.lock) {
                return
            }
            this.fields.forEach((item) => {
                Vue.set(item, '$selected', false)
            })
            Vue.set(item, '$selected', true)
        },

        /**
             * 将字段移到显示区域
             */
        moveToShow () {
            if (!this.hasHiddenFieldsSelected) {
                return
            }
            this.hiddenFields.forEach((item) => {
                if (item.$selected) {
                    Vue.set(item, '$selected', false)
                    Vue.set(item, '$using', true)
                }
            })
        },

        /**
             * 将字段移到隐藏区域
             */
        moveToHide () {
            // console.log('111');
            

            if (!this.hasShowFieldsSelected || this.showFields.length==1) {
                return
            }

            this.showFields.forEach((item) => {
                if (item.$selected) {
                    Vue.set(item, '$selected', false)
                    Vue.set(item, '$using', false)
                }
            })
        },

        /**
             * 提升字段的显示次序
             */
        moveUp () {
            if (!this.canMoveUp) {
                return
            }
            let index = -1
            let selectedItem = null
            let fields = this.fields
            let preIndex = -1
            let length = fields.length

            while (length--) {
                if (fields[length].$selected) {
                    index = length
                    selectedItem = fields[length]
                    break
                }
            }

            // 找上一个显示的字段
            for (let i = index - 1; i >= 0; i--) {
                if (fields[i].$using) {
                    preIndex = i
                    break
                }
            }
            fields[index] = fields.splice(preIndex, 1, selectedItem)[0]
        },

        /**
             * 降低字段的显示次序
             */
        moveDown () {
            if (!this.canMoveDown) {
                return
            }
            let index = -1
            let selectedItem = null
            let fields = this.fields
            let nextIndex = -1
            let length = fields.length

            while (length--) {
                if (fields[length].$selected) {
                    index = length
                    selectedItem = fields[length]
                    break
                }
            }

            length = fields.length

            // 找下一个显示的字段
            for (let i = index + 1; i < length; i++) {
                if (fields[i].$using) {
                    nextIndex = i
                    break
                }
            }

            fields[index] = fields.splice(nextIndex, 1, selectedItem)[0]
        },

        /**
             * 保存字段的设置信息
             */
        save () {
            let content = []
            this.isDisabled = true

            this.fields.forEach((item) => {
                if (item.$using) {
                    content.push({
                        fieldShowId: item.fieldShowId,
                        preId: item.preId,
                        name: item.name,
                        showName: item.showName,
                        lock: item.lock,
                        hidden: item.hidden,
                        sort: item.sort,
                        idx: item.idx
                    })
                }
            })

            setHeaderConfig({
                displayType: this.displayType,
                fields: content,
                getTime: this.getTime
            })
                .then((res) => {
                    this.$emit('setheadersuccess')
                    this.$store.commit('HIDE_SET_HEADER')
                    this.isDisabled = false
                })
                .catch(() => {
                    this.isDisabled = false
                })
        },

        /**
             * 取消保存字段的设置信息
             */
        cancel () {
            this.$store.commit('HIDE_SET_HEADER')
        }
    },
    created () {
        this.fullscreenLoading = true

        getHeaderConfig({
            displayType: this.displayType
        })
            .then((res) => {
                let data = res.data
                let using = data.using
                let all = data.all
                let hiding = []
                this.getTime = data.getTime

                all.forEach((item) => {
                    if (!using.some((i) => { return i.name == item.name })) {
                        item.$using = false
                        hiding.push(item)
                    }
                })

                let fields = using.concat(hiding)

                fields.forEach((item) => {
                    item.$selected = false
                    if (typeof item.$using == 'undefined') {
                        item.$using = true
                    }
                })
                this.fields = fields
                this.fullscreenLoading = false
            })
            .catch(() => {
                this.fullscreenLoading = false
            })
    },
    destroyed () {
        this.$store.commit('HIDE_SET_HEADER')
    }
}
</script>

