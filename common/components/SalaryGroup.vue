<template>
    <el-select
        :loading="loading"
        :placeholder="placeholder"
        :clearable="clearable"
        :filterable="filterable"
        :style="{width: typeof width === 'number' ? (width + 'px') : '100%'}"
        :disabled="disabled"
        @change="change"
        v-model="id">
        <el-option
            v-for="salaryGroup in list"
            :key="salaryGroup.id"
            :label="salaryGroup.name"
            :value="salaryGroup.id">
        </el-option>
    </el-select>
</template>

<script>
    import { getSalaryGroupList } from '../request';

    export default {
        props: {
            filterable: {
                default: true
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
            disabled: {
                default: false
            }
        },
        data () {
            return {
                id: this.value,
                loading: false,
                list: []
            }
        },
        methods: {
            fetchList () {
                this.loading = true;
                getSalaryGroupList()
                    .then(({ data }) => {
                        this.list = data;
                        setTimeout(()=>{ this.loading = false;});
                    })
            },

            change (value) {
                this.$emit('input', value);
                this.$emit('change', value);
            }
        },
        mounted () {
            this.fetchList();
        },

        watch: {
            value (val) {
                this.id = val;
            }
        }
    }
</script>
