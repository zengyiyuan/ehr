<!--
    角色选择器
    jiangjun
-->
<template>
    <el-select
        v-model="userRoleId"
        clearable
        filterable
        remote
        :disabled="disabled"
        no-data-text="没有找到信息"
        :multiple="isMultiple"
        @clear="clear"
        @change="changeUser"
        :loading="loading"
        :remote-method="fetchList"
        :placeholder="placeholder"
        :style="{width: typeof width === 'number' ? (width + 'px') : '100%'}">
            <el-option
                v-for="item, index in list"
                :label="item.name"
                :value="item.id"
                :key="index">
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
        schoolId: {},
        roleType: {
            default: 1
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
            loading: false,
            list: [],
            userRoleId: ''
        };
    },
    mounted () {
        // this.getDefaultOption();
        this.defaultUser();
    },
    methods: {
        /**
         * 设置默认校区
         */
        defaultUser () {
            var userInfo = this.userInfo;
            var value = this.value;
            var name = this.name;
            if (value && name) {
                this.userId = value;
                this.$emit('input', value);
                if (this.isMultiple) {
                    value = value[0];
                }
                if (!this.list.length) {
                    this.list = [{
                        id: value,
                        name: name
                    }];
                }

            }
            // 分校设置默认校区
            if (userInfo && userInfo.roleType == 1 && !value) {
                this.userId = userInfo.userId;
                this.$emit('input', this.userId);
                this.list = [{
                    id: userInfo.userId,
                    name: userInfo.userName
                }];
            }
        },
        /**
         * 清除校区信息
         */
        clear () {
            this.list = [];
            setTimeout(()=>{
                this.getDefaultOption();
            }, 500);
        },
        /**
         * 获取角色列表
         */
        fetchList (query) {
            if (query.length < 2) {
                return;
            }
            this.loading = true;
            timer = setTimeout(() => {
                let params = {
                    key: "管理员",
                    pageDto: {
                        pageNum: 1,
                        pageSize: 20
                    }
                };
                post('/userRole/list.json', params)
                .then((res) => {
                    this.list = res.data;
                    setTimeout(()=>{ this.loading = false;});
                }, ()=> {
                    setTimeout(()=>{ this.loading = false;});
                });
            }, 200);
        },
        /**
         * 改变校区
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
                pageNum: 1,
                pageSize: 20
            };
            if (this.schoolId) {
                Object.assign(params, {
                    schoolId: this.schoolId
                });
            }
            post('/user/fuzzyQuery.json', params)
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
        }
    }
};
</script>
