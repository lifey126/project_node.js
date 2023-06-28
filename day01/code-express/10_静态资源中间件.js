const express = require('express');

const app = express();

//静态资源中间件设置
app.use(express.static(__dirname + '/public'))

app.get('/home', (req, res)=>{
    res.end('hello express');
})

app.listen(3000, ()=>{
    console.log('服务已经启动， 端口3000正在监听中...');
})