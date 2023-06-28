const express = require('express');

//2. 创建应用对象
const app = express();

//3. 创建路由
app.get('/:id.html', (req, res)=>{
    //获取URL 路由参数
    console.log(req.params.id);
    res.setHeader('content-type', 'text/html;charset=utf-8');
    res.end('商品详情');
})

app.listen(3000, ()=>{
    console.log('服务已经启动， 端口3000正在监听中...');
})