<template>
    <el-cascader
        :options="options"
        :placeholder="placeholder"
        :clearable="clearable"
        :class="{'has-origin': this.value}"
        :show-all-levels="showAllLevels"
        :disabled="disabled"
        @change="change"
        @active-item-change="handleItemChange"
        :props="props"
        v-model="defaultValue"
        :style="{width: typeof width === 'number' ? (width + 'px') : '100%'}"
    ></el-cascader>
</template>

<script>

    import { sequenceSearch, gradeSearch } from '../request';

    export default {
        props: {
            width: {
            },
            clearable: {
                default: true
            },
            placeholder: {
                default: '请选择职级体系'
            },
            showAllLevels: {
                default: true
            },
            disabled: {
                default: false
            },
            value: {

            }
        },
        data () {
            return {
                defaultValue: this.value,
                options: [
                    {
                        id: -1,
                        name: '未定级'
                    }
                ],
                props: {
                    value: 'id',
                    label: 'name',
                    children: 'grades'
                }
            }
        },
        watch: {
            value (val) {
                this.defaultValue = val;

                // 回填职级
                if (val && val.length === 2) {
                    this.handleItemChange([val[0]])
                }
            }
        },
        methods: {
            /**
             * 序列列表
             */
            getSequenceList () {
                sequenceSearch({
                    pageDto: {
                        pageNum: 1,
                        pageSize: 1000
                    }
                }).then(({ data }) => {
                    let sequenceList = data.map((item) => {
                        return {
                            id: item.id,
                            name: `${item.name}序列`,
                            grades: []
                        }
                    })
                    this.options = [
                        ...this.options,
                        ...sequenceList
                    ]
                })
            },

            handleItemChange (val) {
                if (val[0] !== -1) {
                    let item = this.options.find((item) => item.id === val[0]);
                    if (item === undefined) {
                        this.getSequenceList()
                    }
                    if (item && item.grades && item.grades.length) {
                        return
                    }

                    let res = [];
                    gradeSearch({
                        gradeId: val[0]
                    }).then(({ data }) => {
                        res = data.map((item) => {
                            return {
                                // id: item.id,
                                id: item.level,
                                seqId: item.gradeId,
                                name: `${item.rank}`,
                            }
                        });
                        let index = this.options.findIndex((item) => item.id === val[0]);
                        this.options[index].grades = res;
                    })
                }
            },

            change (value) {
                this.$emit('input', value);
                this.$emit('change', value);
            }
        },
        async mounted () {
            await this.getSequenceList();
            // 回填职级
            if (this.value && this.value.length === 2) {
                this.handleItemChange([this.value[0]])
            }

        }
    }
</script>

<style lang="scss">
    .has-origin {
        input::-webkit-input-placeholder {
            color: #606266!important;
        }
    }
</style>
