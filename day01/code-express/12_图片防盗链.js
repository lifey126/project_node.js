const express = require('express');

const app = express();

app.use((req, res, next)=>{
    let referer = req.get('referer');
    if(referer){
        let url = new URL(referer);
        let hostname = url.hostname;
        if(hostname !== '127.0.0.1'){
            res.status(404).send('<h1>404 Not Found</h1>');
            return;
        }
    }
    next();
})

//静态资源中间件设置
app.use(express.static(__dirname + '/public'))

app.listen(3000, ()=>{
    console.log('服务已经启动， 端口3000正在监听中...');
})