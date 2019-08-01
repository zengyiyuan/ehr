<template>
    <div class="comp-full-calendar">
        <!-- header pick month -->
        <fc-header
            :cur-date="currentDate"
            :title-format="titleFormat"
            :first-day="firstDay"
            :month-names="monthNames"
            @change="emitChangeMonth">

            <div slot="header-left">
                <slot name="fc-header-left"></slot>
            </div>

            <div slot="header-right">
                <slot name="fc-header-right"></slot>
            </div>
        </fc-header>

        <!-- 日历，事件 -->
        <fc-body
            :events="events"
            :current-date="currentDate"
            :month-names="monthNames"
            :week-names="weekNames"
            :first-day="firstDay"
            @eventclick="emitEventClick"
            @dayclick="emitDayClick"
            @moreclick="emitMoreClick">
            <div slot="body-card">
                <slot name="fc-body-card"></slot>
            </div>
        </fc-body>
    </div>
</template>

<script>
import FcBody from './components/body';
import FcHeader from './components/header';
import langSets from './dataMap/langSets';
import dateFunc from './components/dateFunc'

export default {
    props : {
        year: {
            type: Number,
            default: new Date().getFullYear()
        },
        month: {
            type: Number,
            default: new Date().getMonth()
        },
        events: {
            type: Array,
            default: []
        },
        lang: {
            type: String,
            default: 'zh'
        },
        firstDay: {
            type: Number | String,
            validator (val) {
                let res = parseInt(val)
                return res >= 0 && res <= 6
            },
            default: 0
        },
        titleFormat: {
            type: String,
            default () {
                return langSets[this.lang].titleFormat
            }
        },
        monthNames: {
            type: Array,
            default () {
                return langSets[this.lang].monthNames
            }
        },
        weekNames: {
            type: Array,
            default () {
                let arr = langSets[this.lang].weekNames
                return arr.slice(this.firstDay).concat(arr.slice(0, this.firstDay))
            }
        }
    },
    data () {
        return {
            currentDate: new Date()
        }
    },
    watch: {
       year (val) {
           this.setCurrentdate()
           console.log(`CURRENT_DATE: ${dateFunc.format(this.currentDate, 'yyyy年MM月dd日')}`)
        },
       month (val) {
           this.setCurrentdate()
           console.log(`CURRENT_DATE: ${dateFunc.format(this.currentDate, 'yyyy年MM月dd日')}`)
        }
    },
    methods: {
        emitChangeMonth (start, end, currentStart, current) {
            this.currentDate = current
            this.$emit('changeMonth', current, current, currentStart)
        },
        emitEventClick (event, jsEvent, pos) {
            this.$emit('eventClick', event, jsEvent, pos)
        },
        emitDayClick (day, jsEvent) {
            this.$emit('dayClick', day, jsEvent)
        },
        emitMoreClick (day, events, jsEvent) {
            this.$emit('moreClick', day, event, jsEvent)
        },
        setCurrentdate () {
            let month = this.month
            let year = this.year
            let date = new Date(`${year}/${month+1}/1 00:00:00`)
            this.currentDate = date
        }
    },
    components: {
        FcBody,
        FcHeader
    }
}
</script>

<style lang="scss">
    .comp-full-calendar {
        background: #fff;
        max-width: 960px;
        margin:0 auto;
        ul,
        p {
            margin:0;
            padding:0;
            font-size: 14px;
        }
    }
</style>
