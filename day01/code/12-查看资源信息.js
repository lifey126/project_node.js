const fs = require('fs');

//stat方法
fs.stat('./移动文件测试/座右铭test.txt',(err, data)=>{
    if(err){
        console.log('查看失败');
        return;
    }
    console.log(data);
    console.log(data.isFile());
    console.log(data.isDirectory());
})