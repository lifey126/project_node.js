const fs = require('fs');

//调用rename方法
// fs.rename('./座右铭.txt', './论语.txt', err =>{
//     if(err){
//         console.log('重命名操作失败');
//         return;
//     }
//     console.log('重命名操作成功');
// });

//文件移动
fs.rename('./座右铭test.txt', './移动文件测试/座右铭test.txt', err=>
{
    if(err){
        console.log('移动操作失败');
        return;
    }
    console.log('移动操作成功');
});