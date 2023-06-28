const ejs = require('ejs');
const fs = require('fs');

let china = '中国';
let weather = '天气';

let str = fs.readFileSync(__dirname + '/01_html.html').toString();

let result = ejs.render(str, {china: china, weather});

console.log(result);