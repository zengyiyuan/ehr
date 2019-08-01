<template>
  <div class="full-calendar-header">
        <div class="header-month-options">
            <span
                class="month-option"
                v-for="(month, index) in langSets.zh.monthNames"
                v-text="month"
                :class="{'month-active': active === index}"
                :key="index"
                @click="goToMonth(index)"></span>
        </div>
  </div>
</template>
<script type="text/babel">
import dateFunc from './dateFunc'
import langSets from '../dataMap/langSets'
import RoleFilterNewVue from '../../RoleFilterNew.vue';

export default {
    created () {
        this.goToMonth(this.headDate.getMonth())
        this.dispatchEvent()
    },
    props: {
        curDate: {},
        titleFormat: {},
        firstDay: {},
        monthNames: {}
    },
    data () {
        return {
            title: '',
            leftArrow: '<',
            rightArrow: '>',
            headDate: new Date(),
            langSets,
            active: 0,
            currentDate: this.curDate
        }
    },
    watch: {
        currentDate (newVal, oldVal) {
            if (!newVal) {
                return
            }
            this.headDate = newVal
            console.log(`NEW_VAL: ${dateFunc.format(newVal, 'yyyy年MM月dd日')}, OLD_VAL: ${dateFunc.format(oldVal, 'yyyy年MM月dd日')}`)
        }
    },
    methods: {
        changeYear (date, num) {
            let dt = new Date(date)
            let year = dt.getFullYear()
            return new Date(dt.setYear(num))
        },
        changeMonth (date, num) {
            let year = date.getFullYear()
            let month = num
            return  new Date(new Date(new Date(new Date().setDate(1)).setMonth(month)).setFullYear(year))
        },
        goToYear (year) {
            this.headDate = this.changeYear(this.headDate, year)
            this.dispatchEvent()
        },
        goToMonth (index) {
            this.active = index
            this.headDate = this.changeMonth(this.headDate, index)
            this.dispatchEvent()
        },
        dispatchEvent() {
            this.title = dateFunc.format(this.headDate, this.titleFormat, this.monthNames)

            let startDate = dateFunc.getStartDate(this.headDate)
            let curWeekDay = startDate.getDay()

            // 1st day of this monthView
            let diff = parseInt(this.firstDay) - curWeekDay
            if (diff) diff -= 7
            startDate.setDate(startDate.getDate() + diff)

            // the month view is 6*7
            let endDate = dateFunc.changeDay(startDate, 30)

            // 1st day of current month
            let currentDate = dateFunc.getStartDate(this.headDate)

            this.$emit('change',
                dateFunc.format(currentDate, 'yyyy-MM-dd'),
                dateFunc.format(currentDate, 'yyyy-MM-dd'),
                dateFunc.format(currentDate, 'yyyy-MM-dd'),
                this.headDate
            )
        }
    }
}
</script>
<style lang="scss">
    .header-month-options {
        box-sizing: border-box;
        padding: 5px 15px;
        width: 100%;
        height: 40px;
        display: flex;
        color: #666;
        background-color: #FAFAFA;
        align-items:center;
        justify-content:center;
        .month-option {
            width: 40px;
            height: 30px;
            line-height: 30px;
            text-align: center;
            cursor: pointer;
        }
        .month-option + .month-option {
            margin-left: 5px;
        }
        .month-active {
            color: #FFF;
            background: #679AFA;
            border-radius: 30px;
        }
    }
</style>
