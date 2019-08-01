
/**
 * @file
 * @author Xiong,Cheng-Qing
 */

'use strict';

import divide from '@/common/function/divide';
import Vue from 'vue';

/**
 * @param {Number} unit
 *
 * @return {Numerb} divided number
 */
Vue.filter('unitMoney', function(value, unit = 100) {
 	return divide(value, unit);
});
