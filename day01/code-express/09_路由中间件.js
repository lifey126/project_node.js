const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();

// function recordMiddleware(req, res, next){
//     let {url, ip} = req;
//     fs.appendFileSync(path.resolve(__dirname, './access_test.log'), `${url}, ${ip}\r\n`);
//     next();
// }

// app.use(recordMiddleware);

let checkCodeMiddleware = (req, res, next) => {
    //判断URL中是否code参数等于521
    if(req.query.code === '521'){
        next();
    }else{
        res.send('暗号错误');
    }
}

app.get('/home', (req, res)=>{
    res.send('前台首页');
})

app.get('/admin', checkCodeMiddleware, (req, res)=>{
    res.send('后台首页');
})

app.all('/setting', checkCodeMiddleware, (req, res)=>{
    res.send('设置页面');
})

app.all('*', (req, res)=>{
    res.send('<h1>404 Not Found</h1>');
})

app.listen(3000, ()=>{
    console.log('服务已经启动， 端口3000正在监听中...');
})