const express = require('express');
const {singers} = require('./singers.json');

const app = express();

app.get('/singer/:id.html', (req, res)=>{
    let {id} =req.params;
    let result = singers.find(item=>{
        if(item.id === Number(id)){
            return true;
        }
    })
    if(!result){
        res.statusCode = 404;
        res.end(`404 Not Found`);
    }
    res.setHeader('content-type', 'text/html;charset=utf-8');
    res.end(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
    </head>
    <body>
        <h2>${result.singer_name}</h2>
        <img src='${result.singer_pic}'>
    </body>
    </html>
    `);
})

app.listen(3000, ()=>{
    console.log('服务已经启动， 端口3000正在监听中...');
})