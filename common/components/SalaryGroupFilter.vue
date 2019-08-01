<!--
    此组件和 SalaryGroup.vue 的区别是请求的接口有差别
    此组件的下拉项数据根据当前用户返回的，并且此组件支持多项选择
-->

<template>
    <el-select
        :style="{width: typeof width === 'number' ? (width + 'px') : '100%'}"
        :loading="loading"
        :placeholder="placeholder"
        :clearable="clearable"
        :filterable="filterable"
        :multiple="multiple"
        :change="change"
        v-model="id"
        >
        <el-option
            v-for="salaryGroup in salaryGroupData"
            :key="salaryGroup.salaryGroupId"
            :label="salaryGroup.groupName"
            :value="salaryGroup.salaryGroupId">
        </el-option>
    </el-select>
</template>

<script>
export default {
    props: {
        filterable: {
            default: true
        },
        multiple: {
            default: false
        },
        clearable: {
            default: true
        },
        placeholder: {
            default: '请选择或者输入薪酬组名称'
        },
        value: {

        },
        width: {
            default: ''
        },
        salaryGroupData: {

        }
    },
    data () {
        return {
            id: this.value,
            loading: false
        }
    },
    methods: {
        change (value) {
            this.$emit('input', value)
            this.$emit('change', value)
        }
    },
    watch: {
        value (val) {
            console.log(val, 'FILTER INSIDE')
            this.id = val
        }
    },
    mounted () {
        console.log(JSON.stringify(this.salaryGroupData))
    }
}
</script>
