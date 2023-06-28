const express = require('express');

//2. 创建应用对象
const app = express();

//3. 创建路由
app.get('/request', (req, res)=>{
    console.log(req.method);
    console.log(req.url);
    console.log(req.httpVersion);
    console.log(req.headers);

    console.log(req.path);
    console.log(req.query);

    console.log(req.ip);
    //请求头
    console.log(req.get('host'));
    res.end('hello express');
})

app.listen(3000, ()=>{
    console.log('服务已经启动， 端口3000正在监听中...');
})