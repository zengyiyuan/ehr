/**
 * @fileOverview deepclone
 * @author lixiaobin
 */

const deepClone = function (obj) {
    if (Array.isArray(obj)) {
        return obj.map(deepClone)
    } else if (obj && typeof obj === 'object') {
        let cloned = {}
        let keys = Object.keys(obj)
        for (let i = 0, l = keys.length; i < l; i++) {
            let key = keys[i]
            cloned[key] = deepClone(obj[key])
        }
        return cloned
    } else {
        return obj
    }
}

export default deepClone

