// querystring 模块提供用于解析和格式化 URL 查询字符串的实用工具。
const querystring = require('querystring');

/**
 * 一·、querystring.parse(string,sep?,eq?,options?): 对url查询参数（字符串）进行解析，生成易于分析的json格式
 *        1.sep表示分割符，用于替换 & 去解析的自定义字符
 *        2.eq表示相等符，用于替换 = 去解析的自定义字符
 */
const URL = "type=0&name=book&issue=learn%20node.js";
console.log(querystring.parse(URL));

const URL2 = "type:0/name:book/issue:learn%20node.js";
console.log(querystring.parse(URL2, '/', ':'));
// 当有key值相同时，会存放在同一个数组里
const URL3 = "type=0&name=book&issue=node.js&issue=vue.js";
console.log(querystring.parse(URL3));

/**
 * 二、querystring.stringify(string,sep?,eq?,options?): 查询参数拼接成字符串
 */
const URL_object = {
    type: '0',
    name: 'book',
    issue: 'node.js'
};
console.log(querystring.stringify(URL_object));

// 数组会解析为 issue=node.js&issue=vue.js 的形式
const URL_object2 = {
    type: '0',
    name: 'book',
    issue: ['node.js','vue.js']
};
console.log(querystring.stringify(URL_object2));