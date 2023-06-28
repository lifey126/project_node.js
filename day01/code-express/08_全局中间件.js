const express = require('express');
const fs = require('fs');
const path = require('path');

//2. 创建应用对象
const app = express();

//中间件函数
function recordMiddleware(req, res, next){
    //获取url 和 ip
    let {url, ip} = req;
    //保存
    fs.appendFileSync(path.resolve(__dirname, './access.log'), `${url} ${ip}\r\n`);
    //调用next
    next();
}

//使用中间件函数
app.use(recordMiddleware);

//3. 创建路由
app.get('/home', (req, res)=>{
    res.send('前台首页');
})

app.get('/admin', (req, res)=>{
    res.send('后台首页');
})

app.all('/*', (req, res)=>{
    res.send('<h1>404 Not Found</h1>');
})

app.listen(3000, ()=>{
    console.log('服务已经启动， 端口3000正在监听中...');
})