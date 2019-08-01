<template>
    <el-select
        v-model="userId"
        clearable
        filterable
        ref="component"
        remote
        :disabled="disabled"
        :deleted="deleted"
        :isformal="isformal"
        :staffStatu="staffStatu"
        no-data-text=""
        @remove-tag="remove"
        :isReturnAll="isReturnAll"
        :multiple="true"
        :multiple-limit="limit"
        @clear="clear"
        @change="changeUser"
        :loading="loading"
        :remote-method="fetchList"
        :placeholder="placeholder"
        :style="{width: typeof width === 'number' ? (width + 'px') : '100%'}">
            <el-option
                v-for="(item, index) in list"
                :label="item.chineseName || item.name"
                :value="item.id"
                :key="item.id">
                    <div class="option">
                        <span :title="item.chineseName || item.name">{{ item.chineseName || item.name }}</span>
                        <span><span class="staff-number">{{ item.staffNo }}</span></span>
                    </div>
            </el-option>
    </el-select>
</template>

<script>

let timer = null
import { post, postWithJson } from '../service'
import { list } from '../../modules/organization/request'

export default {
   
    props: {
        isAudit:Number,
        limits: {
           type:Number
        },
        // 为true表示只返回正式员工
        isformal:{
            default:false
        },
        staffStatu:{
            default:null
        },
        value: {},
        name: String,
        // 是否按当前角色所在部门返回结果员工
        isReturnByCurRoleNode: {
            default: false
        },
        // 是否返回所有员工（包括待离职，已离职员工）
        isReturnAll: {
            default: false
        },
        // TODO 单选在IE11下有问题，统一搞成多选
        isMultiple: {
            defualt: true
        },
        // 服务端不仅需要仅中的id，还需要员工号及其它信息，为true返回选中的object
        getUserObject: {
            default: false
        },
        disabled: {
            default: false,
        },
        deleted: {
            default: null,
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
            return this.$store.state.userInfo
        }
    },
    data() {
        let limit = 0
        let value = this.value
        if (typeof this.value != 'object') {
            limit = 1
        }
        let userId = ''
        
        if(this.limits) {
            // console.log(this.limits);
             limit =this.limits
        }
        if (value) {
            userId = [].concat(value)
        }
        return {
            selectedObject: [],
            loading: false,
            limit: limit,
            list: this.options || [],
            userId: userId
        }
    },
    
    mounted () {
        // this.getDefaultOption();
        this.defaultUser()
        
        
    },
    methods: {
        /**
         * 判读selectedObject是否包含某id
         */
        isIncludeUser(userId) {
            return this.selectedObject.some((item) => {
                if (item.id === userId) {
                    return true
                }
            })
        },
        /**
         * 设置默认用户
         */
        defaultUser () {
            let value = this.value
            let name = this.name
            if (value && name) {
                this.$emit('input', [].concat(value))
                if (!this.list.length) {
                    this.list = [
                        {
                            id: value[0],
                            name: name
                        }
                    ]
                }
            }
            if (value) {
                this.userId = [].concat(value)
            }
        },
        remove(userid) {
            this.selectedObject.some((item, index) => {
                if (userid == item.id) {
                    this.selectedObject.splice(index, 1)
                    return true
                }
            })
        },
        /**
         * 清除用户信息
         */
        clear() {
            this.selectedObject = []
            this.list = []
        },
        /**
         * 获取用户列表
         */
        fetchList (query) {
            if (query.length < 1 || /^\s+$/.test(query)) {
                return
            }
            this.loading = true
            clearTimeout(timer)
            timer = setTimeout(() => {
                if(!this.isformal){
                    var params = {
                        query: query,
                        checkCurrentRole: this.isReturnByCurRoleNode,
                        isReturnAll: this.isReturnAll,
                        pageDto: {
                            pageNum: 1,
                            pageSize: 10
                        }
                    }
                    if(this.isAudit === 1){
                        params.isReturnAll = true;
                    }
                }else {
                    var params = {
                        query: query,
                        staffType:1,
                        checkCurrentRole: this.isReturnByCurRoleNode,
                        isReturnAll: this.isReturnAll,
                        pageDto: {
                            pageNum: 1,
                            pageSize: 10
                        }
                    }
                }
                if(this.staffStatu){
                     var params = {
                        query: query,
                        staffStatus:this.staffStatu,
                        checkCurrentRole: this.isReturnByCurRoleNode,
                        isReturnAll: this.isReturnAll,
                        pageDto: {
                            pageNum: 1,
                            pageSize: 10
                        }
                    }
                }
                postWithJson('/staff/simpleList.json', params)
                    .then((res) => {
                        this.list = res.data
                        if(this.deleted) { 
                            if(this.deleted instanceof Array){
                                for(var index=this.list.length-1;index>=0;index--){
                                     let item = this.list[index];
                                     for(var i=0;i<this.deleted.length;i++){
                                       if( item.id== this.deleted[i]){
                                            this.list.splice(index,1) 
                                       }
                                   }
                                }
                                
                                  
                                
                            }else {
                                this.list.forEach((item,index) =>{ 
                                    if(item.id == this.deleted){
                                    this.list.splice(index,1)   
                                    }
                                })
                            }
                            
                            
                        }
                        setTimeout(() => { this.loading = false })
                    }, () => {
                        setTimeout(() => { this.loading = false })
                    })
            }, 300)
        },
        /**
         * 改变用户
         */
        changeUser (userId) {
             console.log(this.limit);    
            if (this.limit === 1 ) {
                this.$emit('input', userId[0]|| [])
                this.$emit('change', userId[0] || [])
                setTimeout(() => {
                    this.$refs.component.visible = false
                })
            } else {
                this.$emit('input', userId)
                this.$emit('change', userId)
            }
            if (this.getUserObject) {
                if (userId.length) {
                    // 根据id 找到用户对象 TODO
                    userId.forEach((item) => {
                        this.list.some((user) => {
                            if (user.id == item && !this.isIncludeUser(item)) {
                                this.selectedObject.push(user)
                                return true
                            }
                        })
                    })
                } else {
                    this.selectedObject = []
                }
                setTimeout(() => {
                    this.$emit('changeuserobject', this.selectedObject, this.from)
                })
            }

        },
        /**
         * 获取默认选项
         */
        getDefaultOption () {
            if (this.value && this.name) {
                return
            }
            if (this.disabled) {
                return
            }
            this.loading = true
            let params = {
                roleType: this.roleType,
                pageNum: 1,
                pageSize: 10
            }
            post('/staff/simpleList.json', params)
                .then((res) => {
                    this.list = res.data
                    setTimeout(() => { this.loading = false })
                }, () => {
                    setTimeout(() => { this.loading = false })
                })
        }
    },
    watch: {

        name () {
            this.defaultUser()
        },
        value (value) {
            if (!value) {
                this.userId = []
            } else {
                this.userId = [].concat(value)
            }
            this.defaultUser()
        },
        schoolId () {
            this.fetchList()
        },
        options (value) {
            this.list = value
        },
        limit() {
            console.log(this.limit);
            
        }
    }
}
</script>

<style lang="scss" scoped>
    .option {
        display: flex;
        justify-content: space-between;
        overflow: hidden;
        > span {
            display: inline-block;
            text-overflow: ellipsis;
            white-space: nowrap;
            overflow: hidden;
            max-width: 130px;
            &:last-of-type {
                float: right;
                text-align: left;
                width: 60px;
            }
        }
    }
</style>
