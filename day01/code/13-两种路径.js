const fs = require('fs');

//相对路径 存在bug：其参照物为命令行的工作目录
// fs.writeFileSync('./index.html', 'love');
// fs.writeFileSync('index-2.html', 'love');
// fs.writeFileSync('../index-3.html', 'love');

//绝对路径 
fs.writeFileSync('E:/index.html', 'love');
fs.writeFileSync('/index-2.html', 'love');

//'全局变量' ：所在文件的所在目录的绝对路径
console.log(__dirname)