
/**
 * @file 格式化时间
 * @author Xiong,Cheng-Qing
 */



import fecha from 'element-ui/lib/utils/date'
import Vue from 'vue'

/**
 * @param {Number} value
 * @param {String} mask
 *
 * @return {String} masked date
 */
Vue.filter('formatDate', function(datetime, mask = 'yyyy/MM/dd') {
    if (!datetime) {
        return ''
    }
    try {
        let isDatetimeString = Object.prototype.toString.call(datetime) === '[object String]'
        return isDatetimeString ? fecha.format(new Date(datetime.replace(/-/g, '/')), mask) : fecha.format(new Date(datetime), mask)
    } catch (error) {
        console.log(error)
    }
})
