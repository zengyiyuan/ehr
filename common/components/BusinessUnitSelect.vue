<template>
    <el-select
        :loading="loading"
        :placeholder="placeholder"
        :clearable="clearable"
        :filterable="filterable"
        :disabled="disabled"
        :style="{ width: typeof width === 'number' ? (width + 'px') : '100%' }"
        @change="change"
        v-model="id">
        <el-option
            v-for="item in list"
            :key="item.id"
            :label="item.name"
            :value="item.id">
        </el-option>
    </el-select>
</template>

<script>
import { getBusinessUnitList } from '../request'

export default {
    props: {
        filterable: {
            default: true
        },
        clearable: {
            default: true
        },
        disabled: {
            default: false
        },
        placeholder: {
            default: '请选择事业部'
        },
        width: {
            default: ''
        },
        value: {

        },
    },
    data() {
        return {
            id: this.value,
            loading: false,
            list: []
        }
    },
    watch: {
        value(val) {
            this.id = val
        }
    },
    mounted() {
        this.fetchList()
    },
    methods: {
        async fetchList() {
            try {
                this.loading = true
                let { data } = await getBusinessUnitList()
                this.list = data
                this.loading = false
            } catch (error) {
                this.loading = false
            }
        },

        change(value) {
            this.$emit('input', value)
            this.$emit('change', value)
        }
    }
}
</script>
