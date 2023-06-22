/*
    需求：新建文件
*/ 
//1.导入fs模块
const fs = require('fs');

//2.写入文件  异步
// fs.writeFile('./座右铭.txt', '三人行，必有我师焉', err =>{
//     //err 写入失败 错误对象 写入成功:null
//     if(err){
//         console.log('写入失败');
//     }
//     console.log('写入成功');
// });

// console.log(1  + 1);

//2.写入文件 同步
fs.writeFileSync('./座右铭test.txt', '三人行，必有我师焉', err =>{
    //err 写入失败 错误对象 写入成功:null
    if(err){
        console.log('写入失败');
    }
    console.log('写入成功');
});

console.log(1  + 1);