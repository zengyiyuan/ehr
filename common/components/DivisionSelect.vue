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
            v-for="division in list"
            :key="division.id"
            :label="division.name"
            :value="division.id">
        </el-option>
    </el-select>
</template>

<script>
    import { getDivisionList } from '../request';

    export default {
        props: {
            filterable: {
                default: true
            },
            clearable: {
                default: true
            },
            placeholder: {
                default: '请选择或者输入事业部名称'
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
                getDivisionList()
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
