<template>
    <el-select
        :loading="loading"
        :placeholder="placeholder"
        :clearable="clearable"
        :filterable="filterable"
        :style="{ width: typeof width === 'number' ? (width + 'px') : '100%' }"
        @change="change"
        v-model="id">
        <el-option
            v-for="company in list"
            :key="company.id"
            :label="company.name"
            :value="company.id">
        </el-option>
    </el-select>
</template>

<script>
    import { getCompanyList } from '../request';

    export default {
        props: {
            filterable: {
                default: true
            },
            clearable: {
                default: true
            },
            placeholder: {
                default: '请选择或者输入分公司名称'
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
        methods: {
            fetchList () {
                this.loading = true;
                getCompanyList()
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
