const fs = require('fs');
const { connect } = require('http2');
const path = require('path');

//resolve 拼接规范的绝对路径
console.log(path.resolve(__dirname, 'index.html'));

//sep 获取操作系统的路径分隔符
console.log(path.sep);

//parse 解析路径
//console.log(__filename);
let str = 'E:\\code\\code-node.js\\day01\\code-path\\path.js';
console.log(path.parse(str));

//基础名称 目录名 扩展名
console.log(path.basename(str));
console.log(path.dirname(str));
console.log(path.extname(str));