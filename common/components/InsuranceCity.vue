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
            v-for="city in list"
            :key="city.area.id"
            :label="city.area.name"
            :value="city.area.id">
        </el-option>
    </el-select>
</template>

<script>
    import { getInsuranceCityList } from '../request';

    export default {
        props: {
            filterable: {
                default: true
            },
            clearable: {
                default: true
            },
            placeholder: {
                default: '请选择或者输入社保缴纳城市'
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
                getInsuranceCityList()
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
