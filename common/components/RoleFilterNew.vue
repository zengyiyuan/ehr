<template>
    <el-select
        :loading="loading"
        :placeholder="placeholder"
        :clearable="clearable"
        :filterable="filterable"
        @change="change"
        v-model="id">
        <el-option
            v-for="role in list"
            :key="role.id"
            :label="role.name"
            :value="role.id">
        </el-option>
    </el-select>
</template>

<script>
import { getRoleList } from '../request'

export default {
    props: {
        filterable: {
            default: true
        },
        clearable: {
            default: true
        },
        placeholder: {
            default: '请选择角色'
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
            getRoleList()
                .then(({ data }) => {
                    this.list = data
                    this.list.unshift({
                        id: -1,
                        name: '直属领导',
                        remark: '',
                        isSystem: 0,
                        staffCount: 0
                    })
                    setTimeout(() => { this.loading = false })
                }, () => {
                    setTimeout(() => { this.loading = false })
                })
        },

        change (value) {
            this.$emit('input', value)
            this.$emit('change', value)
        }
    }
}
</script>
