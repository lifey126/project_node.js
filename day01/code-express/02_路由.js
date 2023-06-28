const express = require('express');

//2. 创建应用对象
const app = express();

//3. 创建路由
app.get('/home', (req, res)=>{
    res.end('hello express');
})

app.get('/', (req, res)=>{
    res.end('home');
})

app.post('/login', (req, res)=>{
    res.end('login login');
})

app.all('/test', (req, res)=>{
    res.end('test test')
})

app.all('/*', (req, res)=>{
    res.end('404 Not Found')
})

app.listen(3000, ()=>{
    console.log('服务已经启动， 端口3000正在监听中...');
})