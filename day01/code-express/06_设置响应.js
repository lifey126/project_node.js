const express = require('express');
const app = express();

app.get('/response', (req, res)=>{
    //原生响应
    // res.statusCode = 404;
    // res.statusMessage = 'love';
    // res.setHeader('xxx', 'yyy');
    // res.write('hello express ');
    // res.end('hres');

    // res.status = 500;
    // res.set('aa', 'bb');
    // res.send('你好 Express');

    res.status(600).set('qq', 'zz').send('ok!');
})

app.listen(3000, ()=>{
    console.log('服务已经启动，端口3000正在监听中...');
})