const ejs = require('ejs');
const fs = require('fs');
const xiyou = ['唐僧', '孙悟空', '猪八戒', '沙僧'];

// let str = '<ur>';

// xiyou.forEach(item=>{
//     str += `<li>${item}</li>`;
// })

// str += '</ul>'

// console.log(str);
let html = fs.readFileSync(__dirname + '/02_xiyou.html').toString();
let result = ejs.render(html, {xiyou: xiyou});

console.log(result);