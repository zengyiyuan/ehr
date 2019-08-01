/**
 * @file 格式化时间
 * @author Xiong,Cheng-Qing
 */

import fecha from 'element-ui/lib/utils/date'

const formatDate = function (datetime, mask = 'yyyy/MM/dd') {
    try {
        let isValidateDatetime = Boolean(datetime)
        let isDatetimeString = Object.prototype.toString.call(datetime) === '[object String]'
        return isValidateDatetime ? isDatetimeString ? fecha.format(new Date(datetime.replace(/-/g, '/')), mask) : fecha.format(new Date(datetime), mask) : ''
    } catch (error) {
        console.log(error)
    }
}

export default formatDate

