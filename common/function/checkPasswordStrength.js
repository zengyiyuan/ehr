/**
 * @file 检查密码强度
 * @author Xiong,Cheng-Qing
 */


'use strict';

/**
 * @param {String} password
 *
 * @return {Number}
 */

export default function (pwd) {
    var number = [];
    var lowercase = [];
    var uppercase = [];
    var specialchars = [];
    var comb = {};
    var key;
    for (var f = 0; f < pwd.length; f++) {
        key = pwd.charCodeAt(f);
        if (!comb[key]) {
            if (key >= 48 && key <= 57) {
                number.push(key)
            } else {
                if (key >= 65 && key <= 90) {
                    uppercase.push(key)
                } else {
                    if (key >= 97 && key <= 122) {
                        lowercase.push(key)
                    } else {
                        specialchars.push(key)
                    }
                }
            }
            comb[key] = true
        }
    }
    var strength = 0;
    if (number.length > 0) {
        strength++
    }
    if (lowercase.length > 0) {
        strength++
    }
    if (lowercase.length > 2) {
        strength++
    }
    if (uppercase.length > 0) {
        strength++
    }
    if (uppercase.length > 2) {
        strength++
    }
    if (specialchars.length > 0) {
        strength+=2
    }
    if (specialchars.length > 2) {
        strength += 2
    }
    return strength;
};
