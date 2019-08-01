<template>
    <el-select
        v-model="userId"
        clearable
        filterable
        :disabled="disabled"
        no-data-text=""
        :multiple="isMultiple"
        @clear="clear"
        @change="changeUser"
        :loading="loading"
        :remote-method="fetchList"
        :placeholder="placeholder"
        :style="{width: typeof width === 'number' ? (width + 'px') : '100%'}">
            <el-option
                v-for="item, index in list"
                :label="item.chineseName || item.name"
                :value="item.id"
                :key="index">
                <div class="option">
                    <span>{{ item.chineseName || item.name }}</span>
                    <span>{{ item.staffNo }}</span>
                </div>
            </el-option>
    </el-select>
</template>
<script>
var timer = null;
import { post, postWithJson} from '../service';

export default {
    props: {
        value: {},
        name: String,
        isMultiple: {
            defualt: false
        },
        disabled: {
            default: false,
        },
        // 给定下拉选择项
        options: {
            default () {
                return []
            }
        },
        placeholder: {
            default: '请输入姓名/工号/拼音'
        },
        width: {
            default: ''
        }
    },
    computed: {
        userInfo () {
            return this.$store.state.userInfo;
        }
    },
    data() {
        return {
            approveType : 2,
            loading : false,
            list : this.options || [],
            userId : ''
        };
    },
    mounted () {
        this.getDefaultOption();
        // this.defaultUser();
    },
    methods: {
        /**
         * 设置默认用户
         */
        defaultUser () {
            var value = this.value;
            var name = this.name;
            if (value && name) {
                this.userId = value;
                this.$emit('input', value);
                if (this.isMultiple) {
                    value = value[0];
                }
                if (!this.list.length) {
                    this.list = [
                        {
                            id: value,
                            name: name
                        }
                    ];
                }
            }
            if (value) {
                this.userId = value;
            }
        },
        /**
         * 清除用户信息
         */
        clear () {
            this.list = [];
            setTimeout(()=>{
                this.getDefaultOption();
            }, 500);
        },
        /**
         * 获取用户列表
         */
        fetchList (query) {
            if (query.length < 2) {
                return;
            }
            this.loading = true;
            // timer = setTimeout(() => {
                var params = {
                    query: query
                };
                if (this.schoolId) {
                    Object.assign(params, {
                        schoolId: this.schoolId
                    });
                }
                postWithJson('/role/list.json', params)
                    .then((res) => {
                        this.list = res.data;

                        setTimeout(()=>{ this.loading = false;});
                    }, ()=> {
                        setTimeout(()=>{ this.loading = false;});
                    });
            // }, 0);
        },
        /**
         * 改变用户
         */
        changeUser (userId) {
            this.$emit('input', userId);
            this.$emit('change', userId);
        },
        /**
         * 获取默认选项
         */
        getDefaultOption () {
            if (this.value && this.name) {
                return;
            }
            if (this.disabled) {
                return;
            }
            this.loading = true;
            var params = {
                roleType: this.roleType,
                // query:'hr',
                pageNum: 1,
                pageSize: 20000
            };
            postWithJson('/role/list.json', params)
            .then((res) => {
                this.list = res.data;

                setTimeout(()=>{ this.loading = false;});
            }, ()=> {
                setTimeout(()=>{ this.loading = false;});
            });
        }
    },
    watch: {
        name () {
            this.defaultUser();
        },
        value (value) {
            if (!value) {
                this.userId = '';
            }
            this.defaultUser();
        },
        schoolId () {
            this.fetchList();
        },
        options (value) {
            this.list = value;
        }
    }
};
</script>

<style lang="scss" scoped>
    .option {
        display: flex;
        justify-content: space-between;
    }
</style>

