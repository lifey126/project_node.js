const express = require('express');

const app = express();

app.use(express.static(__dirname + '/尚品汇'));

app.listen(3000, ()=>{
    console.log('服务已经启动， 端口3000正在监听中...');
})