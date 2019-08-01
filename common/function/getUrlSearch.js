/**
 * @file 获取url search
 * @author XiaoBin Li(lixiaobin@huatu.com)
 */

'use strict';

let url = require('../utils/url');

let getUrlSearch = function () {

	return url.parseQuery(window.location.search);
};

export default getUrlSearch;

