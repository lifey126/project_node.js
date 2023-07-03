const mongoose = require('mongoose');

//连接mongodb服务                         数据库名称
mongoose.connect('mongodb://127.0.0.1:27017/bili');

//设置回调 once 事件回调函数只执行一次
mongoose.connection.once('open', ()=>{
    console.log('连接成功');
})
mongoose.connection.on('err', ()=>{
    console.log('连接失败')
})
mongoose.connection.on('close', ()=>{
    console.log('连接关闭')
})

//关闭mongodb的连接
setTimeout(() => {
    mongoose.disconnect();
}, 2000);