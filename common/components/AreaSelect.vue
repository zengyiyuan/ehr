<template>
    <el-select
        :placeholder="placeholder"
        :clearable="clearable"
        :filterable="filterable"
        :style="{ width: typeof width === 'number' ? (width + 'px') : '100%' }"
        @change="change"
        v-model="id">
        <el-option
            v-for="area in list"
            :key="area.id"
            :label="area.name"
            :value="area.id">
        </el-option>
    </el-select>
</template>

<script>
import { areaSearch } from '../request'

export default {
    props: {
        isRoot: {
            default: false,
        },
        parentId: {
            default: ''
        },
        filterable: {
            default: true
        },
        clearable: {
            default: true
        },
        placeholder: {
            default: '请选择地域'
        },
        value: {

        },
        width: {
            default: ''
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
        },
        parentId (val) {
            if (this.isRoot || val) {
                this.getAreaList(val)
            }

            if (!val) {
                this.change('')
            }
        }
    },
    mounted () {
        if (this.isRoot) {
            this.getAreaList()
        }
    },
    methods: {
        async getAreaList (id) {
            this.loading = true
            try {
                let params = id ? { id } : {}
                let { data } = await areaSearch(params)
                this.list = data
            } catch (error) {
                this.loading = false
                console.log(error)
            }
        },
        change (value) {
            this.$emit('input', value)
            this.$emit('change', value)
        }
    }
}
</script>
