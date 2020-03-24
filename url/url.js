// url 模块用于处理与解析 URL
const url = require('url');

/**
 *  url.parse(URL_String): 将url字符串转换为对象
 */
const URL_NODE_STRING = "https://user:pass@sub.host.com:8080/p/a/t/h?query=string#hash";
console.log('String to Object:', url.parse(URL_NODE_STRING));

/**
 *  url.format(URL_object): 将url对象转换为字符串
 */
const URL_NODE_OBJECT = {
    protocol: 'https:',
    slashes: true,
    auth: 'user:pass',
    host: 'sub.host.com:8080',
    port: '8080',
    hostname: 'sub.host.com',
    hash: '#hash',
    search: '?query=string',
    query: 'query=string',
    pathname: '/p/a/t/h',
    path: '/p/a/t/h?query=string',
}
console.log('Object to String:', url.format(URL_NODE_OBJECT));

/**
 *  url.resolve(from,to): 将一些 相对路径 解析为绝对路径
 */
console.log(url.resolve('https://www.baidu.com', 'image')); // https://www.baidu.com/image
console.log(url.resolve('https://www.baidu.com/image', 'music')); // https://www.baidu.com/music
console.log(url.resolve('https://www.baidu.com/image', '/music')); // https://www.baidu.com/music