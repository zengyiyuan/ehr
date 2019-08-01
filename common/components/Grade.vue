<template>
    <el-select
        :loading="loading"
        :placeholder="placeholder"
        :clearable="clearable"
        :filterable="filterable"
        @change="change"
        v-model="gradeId">
        <el-option
            v-for="sequence in sequenceList"
            :key="sequence.id"
            :label="`${sequence.name}序列`"
            :value="sequence.id">
        </el-option>
    </el-select>
</template>

<script>
    import { getSequenceList } from '../request';

    export default {
        props: {
            filterable: {
                default: true
            },
            clearable: {
                default: true
            },
            placeholder: {
                default: '请选择职级序列'
            },
            value: {

            }
        },
        data () {
            return {
                gradeId: this.value,
                loading: false,
                sequenceList: []
            }
        },
        methods: {
            fetchSequenceList () {
                this.loading = true;
                getSequenceList()
                    .then(({ data }) => {
                        this.sequenceList = data;
                        setTimeout(() => { this.loading = false;});
                    })
            },

            /**
             * 选择职级序列
             */
            change (value) {
                this.$emit('input', value);
                this.$emit('change', value);
            }
        },
        mounted () {
            this.fetchSequenceList();
        },


        watch: {
            value (val) {
                this.gradeId = val;
            }
        }
    }
</script>
