const fs = require('fs');

const rs = fs.createReadStream('./笑看风云.mp4');

//绑定data事件
rs.on('data', chunk =>{
    console.log(chunk);
})

//end 可选事件
rs.on('end', () =>{
    console.log('读取完成');
})