<template>
    <el-select
        :loading="loading"
        :placeholder="placeholder"
        :clearable="clearable"
        :filterable="filterable"
        :disabled="disabled"
        @change="change"
        v-model="id">
        <el-option
            v-for="position in list"
            :key="position.id"
            :label="position.name"
            :value="position.id">
        </el-option>
    </el-select>
</template>

<script>
    import { getPositionList } from '../request';

    export default {
        props: {
            isCascade: {
                default: true
            },
            gradeId: {
                default: ''
            },
            filterable: {
                default: true
            },
            clearable: {
                default: false
            },
            placeholder: {
                default: '请选择岗位/职位'
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
        computed: {
            disabled () {
                return (this.isCascade && this.gradeId === '') ||
                    (this.isCascade && this.gradeId === -1)
            }
        },
        watch: {
            value (val) {
                this.id = val
            },
            gradeId (val) {
                this.fetchList()
            }
        },
        mounted () {
            this.fetchList();
        },
        methods: {
            fetchList () {
                this.loading = true;
                if (this.isCascade) {
                    if (this.gradeId !== '' && this.gradeId !== null) {
                        getPositionList({
                            gradeId: this.gradeId
                        })
                            .then(({ data }) => {
                                this.list = [
                                    ...data
                                ];
                                setTimeout(()=>{ this.loading = false;});
                            })
                    }
                }
                if (!this.isCascade) {
                    getPositionList()
                        .then(({ data }) => {
                            this.list = [
                                ...data
                            ];
                            setTimeout(()=>{ this.loading = false;});
                        })
                }
            },

            change (value) {
                this.$emit('input', value);
                this.$emit('change', value);
            }
        }
    }
</script>
