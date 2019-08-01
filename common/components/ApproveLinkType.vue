<template>
    <el-select
        :loading="loading"
        :placeholder="placeholder"
        :clearable="clearable"
        :filterable="filterable"
        @change="change"
        v-model="id">
        <el-option
            v-for="approveLinkType in list"
            :key="approveLinkType.id"
            :label="approveLinkType.name"
            :value="approveLinkType.id">
        </el-option>
    </el-select>
</template>

<script>
import { getApproveLinkTypeList } from '../request'

export default {
    props: {
        filterable: {
            default: true
        },
        clearable: {
            default: true
        },
        placeholder: {
            default: '请选择审批链类型'
        },
        value: {

        }
    },
    data () {
        return {
            id: this.value,
            loading: false,
            list: []
        }
    },
    watch: {
        value (val) {
            this.id = val
        }
    },
    mounted () {
        this.fetchList()
    },
    methods: {
        fetchList () {
            this.loading = true
            getApproveLinkTypeList()
                .then(({ data }) => {
                    this.list = data
                    setTimeout(() => { this.loading = false })
                }, () => {
                    setTimeout(() => { this.loading = false })
                })
        },

        change (value) {
            this.$emit('input', value)
            this.$emit('change', value)
        }
    },
}
</script>
