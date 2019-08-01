<template>
    <el-select
        :loading="loading"
        :placeholder="placeholder"
        @change="change"
        :filterable="filterable"
        :clearable="clearable"
        v-model="id">
        <el-option
            v-for="attendance in list"
            :key="attendance.id"
            :label="attendance.name"
            :value="attendance.id">
            <div class="attendance-option">
                <div class="attendance-name">{{ attendance.name }}</div>
                <div class="attendance-info">
                    <div class="time-group">
                        <span class="start-time">{{ attendance.workBeginTime }}</span> ~
                        <span class="end-time">{{ attendance.workEndTime }}</span>
                    </div>
                    <span class="time-group-split">至</span>
                    <div class="time-group">
                        <span class="start-time">{{ attendance.offBeginTime }}</span> ~
                        <span class="end-time">{{ attendance.offEndTime }}</span>
                    </div>
                </div>
            </div>
        </el-option>
    </el-select>
</template>

<script>
    import { getAttendanceList } from '../request';

    export default {
        props: {
            filterable: {
                default: true
            },
            clearable: {
                default: false
            },
            placeholder: {
                default: '请选择考勤组'
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
        methods: {
            fetchList () {
                this.loading = true;
                getAttendanceList()
                    .then(({ data }) => {
                        this.list = data;
                        this.list.unshift({
                            id: -1,
                            name: '不考勤',
                            workBeginTime: '-:-',
                            workEndTime: '-:-',
                            offBeginTime: '-:-',
                            offEndTime: '-:-'
                        })
                        setTimeout(()=>{ this.loading = false;});
                    })
            },

            change (value) {
                this.$emit('input', value);
                this.$emit('change', value);
            }
        },
        watch: {
            value (val) {
                this.id = val;
            }
        },
        mounted () {
            this.fetchList();
        }
    }
</script>

<style lang="scss">
    .attendance-option {
        display: flex;
        justify-content: space-between;
    }
    .attendance-info {
        display: flex;
        font-size: 12px;
        font-weight: normal !important;
        .time-group {
            margin: 5px 0;
            padding: 0 5px;
            line-height: 24px;
            background-color: #F3F3F3;
            border-radius: 3px;
            color: #999 !important;
        }
        .time-group-split {
            display: inline-block;
            margin: 0 3px;
            color: #666 !important;
        }
        .start-time {
            display: inline-block;
            line-height: 24px !important;
        }
        .end-time {
            display: inline-block;
            line-height: 24px !important;
        }

    }
</style>
